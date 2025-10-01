from datetime import datetime, timezone
from typing import List

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field


router = APIRouter()


class ItemCreate(BaseModel):
    text: str = Field(min_length=1)


class Item(BaseModel):
    id: int
    text: str
    created_at: str


_items: List[Item] = []
_next_id: int = 1


@router.get("/items", response_model=List[Item])
async def list_items() -> List[Item]:
    return list(_items)


@router.post("/items", response_model=Item, status_code=201)
async def create_item(payload: ItemCreate) -> Item:
    global _next_id
    text = payload.text.strip()
    if not text:
        raise HTTPException(status_code=422, detail="text must not be empty")
    item = Item(
        id=_next_id,
        text=text,
        created_at=datetime.now(timezone.utc).isoformat(),
    )
    _next_id += 1
    # newest first
    _items.insert(0, item)
    return item


