import pytest
from httpx import AsyncClient

from app.main import app


@pytest.mark.asyncio
async def test_items_create_and_list_ordering() -> None:
    async with AsyncClient(app=app, base_url="http://test") as client:
        # initially empty
        resp = await client.get("/items")
        assert resp.status_code == 200
        assert resp.json() == []

        # create two items
        r1 = await client.post("/items", json={"text": "first"})
        assert r1.status_code == 201
        item1 = r1.json()
        assert {"id", "text", "created_at"}.issubset(item1.keys())
        assert isinstance(item1["created_at"], str)
        assert "T" in item1["created_at"]

        r2 = await client.post("/items", json={"text": "second"})
        assert r2.status_code == 201
        item2 = r2.json()

        # list should return most recent first
        rlist = await client.get("/items")
        assert rlist.status_code == 200
        data = rlist.json()
        assert [d["id"] for d in data] == [item2["id"], item1["id"]]


@pytest.mark.asyncio
async def test_items_reject_empty_text() -> None:
    async with AsyncClient(app=app, base_url="http://test") as client:
        r = await client.post("/items", json={"text": ""})
        assert r.status_code in (400, 422)


