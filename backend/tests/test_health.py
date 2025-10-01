import pytest
from httpx import AsyncClient
from fastapi import FastAPI

from app.main import app as fastapi_app


@pytest.mark.asyncio
async def test_healthz() -> None:
    async with AsyncClient(app=fastapi_app, base_url="http://test") as client:
        resp = await client.get("/healthz")
        assert resp.status_code == 200
        assert resp.json() == {"status": "ok"}


