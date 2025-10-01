# Edge Boot Backend

FastAPI app exposing `/healthz` and `/items` with an in-memory store.

## Dev

```bash
pip install -e ".[dev]"  # from backend/ or repo root: pip install -e "backend[dev]"
uvicorn app.main:app --reload --port 8000
```

Run tests:

```bash
pytest -q
```


