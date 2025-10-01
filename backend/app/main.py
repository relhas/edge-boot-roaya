from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .items import router as items_router


app = FastAPI(title="Edge Boot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthz")
async def healthz() -> dict:
    return {"status": "ok"}


app.include_router(items_router)


