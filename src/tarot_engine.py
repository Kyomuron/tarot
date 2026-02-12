from __future__ import annotations

from datetime import date
import random
from typing import Any

try:
    from .astrology import astrology_profile, daily_transit, moon_phase
    from .tarot_data import Card, build_deck
except ImportError:
    from astrology import astrology_profile, daily_transit, moon_phase
    from tarot_data import Card, build_deck


SPREAD_POSITIONS: dict[str, list[str]] = {
    "one": ["現在のテーマ"],
    "three": ["過去", "現在", "未来"],
    "five": ["現状", "障害", "潜在意識", "顕在意識", "近未来"],
    "celtic_cross": [
        "現状",
        "障害",
        "顕在意識",
        "潜在意識",
        "過去",
        "近未来",
        "あなた",
        "周囲",
        "希望と不安",
        "最終結果",
    ],
}


YES_MAJOR = {"m0", "m1", "m3", "m6", "m8", "m10", "m14", "m17", "m19", "m21"}
NO_MAJOR = {"m12", "m13", "m15", "m16", "m18"}


class TarotEngine:
    def __init__(self, rng: random.Random | None = None) -> None:
        self._rng = rng or random.SystemRandom()

    def _orient_card(self, card: Card, rng: random.Random | None = None, reverse_rate: float = 0.35) -> dict[str, Any]:
        local_rng = rng or self._rng
        is_reversed = local_rng.random() < reverse_rate
        payload = card.to_dict()
        payload["is_reversed"] = is_reversed
        payload["keywords"] = card.keywords_rev if is_reversed else card.keywords_up
        payload["meaning"] = card.reversed if is_reversed else card.upright
        return payload

    def draw_spread(self, spread: str, deck_filter: str = "all", question: str = "") -> dict[str, Any]:
        positions = SPREAD_POSITIONS.get(spread)
        if not positions:
            raise ValueError(f"未対応のスプレッドです: {spread}")

        deck = build_deck(deck_filter)
        if len(deck) < len(positions):
            raise ValueError("選択されたデッキでは必要枚数を引けません。")

        selected = self._rng.sample(deck, len(positions))
        cards = []
        for position, card in zip(positions, selected):
            result_card = self._orient_card(card)
            result_card["position"] = position
            cards.append(result_card)

        return {
            "spread": spread,
            "deck_filter": deck_filter,
            "question": question,
            "cards": cards,
            "summary": self._spread_summary(cards, question),
        }

    def _spread_summary(self, cards: list[dict[str, Any]], question: str) -> str:
        key_cards = cards[: min(3, len(cards))]
        keyword_text = "、".join(card["keywords"] for card in key_cards)
        if question:
            return f"質問「{question}」に対して、{keyword_text}が主要テーマとして出ています。"
        return f"今回の流れは、{keyword_text}が中心テーマです。"

    def draw_yes_no(self, question: str) -> dict[str, Any]:
        card = self._orient_card(self._rng.choice(build_deck("all")))
        answer = self._yes_no_answer(card)
        return {
            "question": question,
            "card": card,
            "answer": answer,
        }

    def _yes_no_answer(self, card: dict[str, Any]) -> dict[str, str]:
        card_id = card["id"]
        is_reversed = bool(card["is_reversed"])

        if card_id in YES_MAJOR:
            if is_reversed:
                return {"en": "Maybe", "jp": "どちらとも言えない", "class_name": "maybe"}
            return {"en": "Yes", "jp": "はい", "class_name": "yes"}

        if card_id in NO_MAJOR:
            if is_reversed:
                return {"en": "Maybe", "jp": "どちらとも言えない", "class_name": "maybe"}
            return {"en": "No", "jp": "いいえ", "class_name": "no"}

        score = 0.0
        suit = card["suit"]
        if suit in {"cups", "pentacles"}:
            score += 1.0
        elif suit == "swords":
            score -= 1.0
        elif suit == "wands":
            score += 0.3

        if is_reversed:
            score *= -1

        if score >= 0.7:
            return {"en": "Yes", "jp": "はい", "class_name": "yes"}
        if score <= -0.7:
            return {"en": "No", "jp": "いいえ", "class_name": "no"}
        return {"en": "Maybe", "jp": "どちらとも言えない", "class_name": "maybe"}

    def daily_card(self, target_date: date, birth_date: date | None = None) -> dict[str, Any]:
        rng = random.Random(int(target_date.strftime("%Y%m%d")))
        deck = build_deck("all")
        card = self._orient_card(deck[rng.randrange(len(deck))], rng=rng, reverse_rate=0.25)

        payload: dict[str, Any] = {
            "date": target_date.isoformat(),
            "card": card,
            "lunar": moon_phase(target_date),
            "transit": daily_transit(target_date),
        }
        if birth_date is not None:
            payload["astrology"] = astrology_profile(birth_date, target_date)
        return payload
