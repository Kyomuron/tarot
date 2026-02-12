from datetime import date

from src.tarot_engine import TarotEngine


def test_three_card_spread_returns_three_cards() -> None:
    engine = TarotEngine()
    result = engine.draw_spread("three", "all", "テスト質問")
    assert result["spread"] == "three"
    assert len(result["cards"]) == 3


def test_yes_no_response_shape() -> None:
    engine = TarotEngine()
    result = engine.draw_yes_no("実行してよい？")
    assert "card" in result
    assert result["answer"]["jp"] in {"はい", "いいえ", "どちらとも言えない"}


def test_daily_card_is_deterministic_by_date() -> None:
    engine = TarotEngine()
    d = date(2026, 2, 12)
    first = engine.daily_card(d)
    second = engine.daily_card(d)
    assert first["card"]["id"] == second["card"]["id"]
    assert first["card"]["is_reversed"] == second["card"]["is_reversed"]
