from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime, timezone


@dataclass(frozen=True)
class ZodiacSign:
    key: str
    name: str
    symbol: str
    element: str
    advice: str
    tarot_card: str


SIGNS: tuple[ZodiacSign, ...] = (
    ZodiacSign("aries", "牡羊座", "♈", "火", "直感よりも先に、まず行動で流れを作る時期です。", "m4"),
    ZodiacSign("taurus", "牡牛座", "♉", "地", "焦らず積み上げるほど成果が安定します。", "m5"),
    ZodiacSign("gemini", "双子座", "♊", "風", "情報を整理してから発言すると信頼が増します。", "m6"),
    ZodiacSign("cancer", "蟹座", "♋", "水", "感情の揺れを否定せず、守るべきものを明確に。", "m7"),
    ZodiacSign("leo", "獅子座", "♌", "火", "主役意識を恐れず、表現を一段上げる時期です。", "m19"),
    ZodiacSign("virgo", "乙女座", "♍", "地", "細部の調整が全体の運気を大きく改善します。", "m9"),
    ZodiacSign("libra", "天秤座", "♎", "風", "迷いがある時ほど基準を言語化して決断を。", "m11"),
    ZodiacSign("scorpio", "蠍座", "♏", "水", "不要な執着を手放すほど再生が加速します。", "m13"),
    ZodiacSign("sagittarius", "射手座", "♐", "火", "視野を広げる挑戦が次の扉を開きます。", "m14"),
    ZodiacSign("capricorn", "山羊座", "♑", "地", "長期目標を小さな進捗に分解すると前進します。", "m15"),
    ZodiacSign("aquarius", "水瓶座", "♒", "風", "独自性を隠さず共有するほど協力が集まります。", "m17"),
    ZodiacSign("pisces", "魚座", "♓", "水", "直感を現実の行動に落とし込むのが鍵です。", "m18"),
)


def zodiac_sign_from_date(birth_date: date) -> ZodiacSign:
    md = (birth_date.month, birth_date.day)
    if (3, 21) <= md <= (4, 19):
        return SIGNS[0]
    if (4, 20) <= md <= (5, 20):
        return SIGNS[1]
    if (5, 21) <= md <= (6, 21):
        return SIGNS[2]
    if (6, 22) <= md <= (7, 22):
        return SIGNS[3]
    if (7, 23) <= md <= (8, 22):
        return SIGNS[4]
    if (8, 23) <= md <= (9, 22):
        return SIGNS[5]
    if (9, 23) <= md <= (10, 23):
        return SIGNS[6]
    if (10, 24) <= md <= (11, 22):
        return SIGNS[7]
    if (11, 23) <= md <= (12, 21):
        return SIGNS[8]
    if (12, 22) <= md or md <= (1, 19):
        return SIGNS[9]
    if (1, 20) <= md <= (2, 18):
        return SIGNS[10]
    return SIGNS[11]


_SYNODIC_MONTH = 29.53058867
_KNOWN_NEW_MOON = datetime(2000, 1, 6, 18, 14, tzinfo=timezone.utc)


_PHASES = (
    ("新月", "🌑", "意図を定めるのに最適なタイミングです。"),
    ("三日月", "🌒", "小さな一歩を始めると勢いがつきます。"),
    ("上弦の月", "🌓", "迷いを越えて行動を選ぶ局面です。"),
    ("十三夜", "🌔", "調整と成長のバランスが鍵になります。"),
    ("満月", "🌕", "成果が見えやすく、感情も増幅しやすい時。"),
    ("寝待月", "🌖", "見直しと整理で次の準備を整えましょう。"),
    ("下弦の月", "🌗", "手放しが新しい余白を作ります。"),
    ("有明月", "🌘", "静かな内省が精度の高い判断につながります。"),
)


def moon_phase(target_date: date) -> dict[str, str | float]:
    current = datetime(target_date.year, target_date.month, target_date.day, tzinfo=timezone.utc)
    days_since_new_moon = (current - _KNOWN_NEW_MOON).total_seconds() / 86400.0
    lunation = (days_since_new_moon % _SYNODIC_MONTH) / _SYNODIC_MONTH
    index = int((lunation * 8) + 0.5) % 8
    name, symbol, meaning = _PHASES[index]
    return {
        "name": name,
        "symbol": symbol,
        "meaning": meaning,
        "ratio": round(lunation, 4),
    }


_TRANSITS = (
    {"planet": "月", "advice": "感情のケアを優先し、無理な決断は避けましょう。"},
    {"planet": "火星", "advice": "勢いはあります。衝突よりも建設的な行動へ。"},
    {"planet": "水星", "advice": "連絡・契約は再確認を徹底すると吉です。"},
    {"planet": "木星", "advice": "拡大運。学びや挑戦への投資が実りやすい日です。"},
    {"planet": "金星", "advice": "人間関係と美意識を整えるほど運気が上がります。"},
    {"planet": "土星", "advice": "基礎固めの日。約束と期限を守ることが追い風に。"},
    {"planet": "太陽", "advice": "意志を明確にして行動すれば評価がついてきます。"},
)


def daily_transit(target_date: date) -> dict[str, str]:
    return _TRANSITS[target_date.weekday()]


def astrology_profile(birth_date: date, target_date: date) -> dict[str, object]:
    sign = zodiac_sign_from_date(birth_date)
    return {
        "sign": {
            "key": sign.key,
            "name": sign.name,
            "symbol": sign.symbol,
            "element": sign.element,
            "advice": sign.advice,
            "tarot_card": sign.tarot_card,
        },
        "lunar": moon_phase(target_date),
        "transit": daily_transit(target_date),
    }
