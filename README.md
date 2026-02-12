# Python版 タロット + 占星術 API（日本語）

このディレクトリは、Cloudflare での公開を最終目的にした Python 実装です。

- タロット: 1枚 / 3枚 / 5枚 / ケルト十字
- Yes/No占い
- デイリーカード
- 生年月日からの星座プロファイル（月相・簡易トランジット含む）

## 1. ローカル実行

```bash
cd python_worker
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn src.api:app --reload --port 8000
```

起動後:

- API ドキュメント: `http://127.0.0.1:8000/docs`
- ヘルスチェック: `http://127.0.0.1:8000/api/health`

## 2. API 例

### スプレッド占い

```bash
curl -X POST http://127.0.0.1:8000/api/spread \
  -H 'content-type: application/json' \
  -d '{"spread":"three","deck_filter":"all","question":"転職すべき？","birth_date":"1992-07-10"}'
```

### Yes/No 占い

```bash
curl -X POST http://127.0.0.1:8000/api/yesno \
  -H 'content-type: application/json' \
  -d '{"question":"この企画は通る？","birth_date":"1992-07-10"}'
```

### 今日の1枚

```bash
curl 'http://127.0.0.1:8000/api/daily?target_date=2026-02-12&birth_date=1992-07-10'
```

## 3. Cloudflare Workers へのデプロイ

Cloudflare の Python Workers 向け公式手順に合わせています。

```bash
cd python_worker
uv tool install workers-py
uv run pywrangler dev
```

本番デプロイ:

```bash
uv run pywrangler deploy
```

設定は `wrangler.toml` を使用します。

- エントリ: `src/entry.py`
- 互換フラグ: `python_workers`

## 4. 既存フロント（index.html / script.js）との接続

既存の UI を活かす場合は、`fetch('/api/...')` で本APIを呼び出す形に置き換えるだけで連携できます。
Cloudflare では、

1. フロントを Pages に配置
2. この Python API を Workers に配置

の2層構成が運用しやすいです。
