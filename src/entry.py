from __future__ import annotations

import asgi
from workers import WorkerEntrypoint

try:
    from .api import app
except ImportError:
    from api import app


class Default(WorkerEntrypoint):
    async def fetch(self, request):
        return await asgi.fetch(app, request)
