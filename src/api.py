from __future__ import annotations

from datetime import date

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

try:
    from .astrology import astrology_profile
    from .tarot_engine import SPREAD_POSITIONS, TarotEngine
except ImportError:
    from astrology import astrology_profile
    from tarot_engine import SPREAD_POSITIONS, TarotEngine


class SpreadRequest(BaseModel):
    spread: str = Field(default="three", description="one|three|five|celtic_cross")
    deck_filter: str = Field(default="all", description="all|major|wands|cups|swords|pentacles")
    question: str = Field(default="", max_length=200)
    birth_date: date | None = Field(default=None, description="YYYY-MM-DD")


class YesNoRequest(BaseModel):
    question: str = Field(default="", max_length=200)
    birth_date: date | None = Field(default=None, description="YYYY-MM-DD")


engine = TarotEngine()


app = FastAPI(
    title="Tarot + Astrology API (JP)",
    description="Cloudflare公開を想定した日本語APIです。",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root() -> dict[str, str]:
    return {
        "message": "タロットAPIは稼働中です。",
        "docs": "/docs",
    }


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/spread")
async def spread_reading(payload: SpreadRequest) -> dict[str, object]:
    try:
        result = engine.draw_spread(
            spread=payload.spread,
            deck_filter=payload.deck_filter,
            question=payload.question,
        )
        if payload.birth_date:
            result["astrology"] = astrology_profile(payload.birth_date, date.today())
        return result
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@app.post("/api/yesno")
async def yes_no_reading(payload: YesNoRequest) -> dict[str, object]:
    result = engine.draw_yes_no(payload.question)
    if payload.birth_date:
        result["astrology"] = astrology_profile(payload.birth_date, date.today())
    return result


@app.get("/api/daily")
async def daily_reading(
    target_date: date | None = Query(default=None, description="YYYY-MM-DD"),
    birth_date: date | None = Query(default=None, description="YYYY-MM-DD"),
) -> dict[str, object]:
    if target_date is None:
        target_date = date.today()
    return engine.daily_card(target_date=target_date, birth_date=birth_date)


@app.get("/api/astrology")
async def astrology(birth_date: date = Query(description="YYYY-MM-DD")) -> dict[str, object]:
    return astrology_profile(birth_date, date.today())


@app.get("/api/spreads")
async def supported_spreads() -> dict[str, list[str]]:
    return {"spreads": list(SPREAD_POSITIONS.keys())}
