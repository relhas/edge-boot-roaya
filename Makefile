.PHONY: dev test fmt clean

dev:
	@echo "Starting backend (uvicorn) and frontend (vite)..."
	@npx --yes concurrently -n BACKEND,FRONTEND -c green,cyan \
		"bash -lc 'source .venv/bin/activate && PYTHONPATH=backend python -m uvicorn app.main:app --reload --port 8000'" \
		"npm --prefix frontend run dev"

test:
	@echo "Running backend tests..."
	@bash -lc 'source .venv/bin/activate && PYTHONPATH=backend pytest -q backend/tests'
	@echo "Running frontend typecheck/build..."
	@npm --prefix frontend run typecheck
	@npm --prefix frontend run build

fmt:
	@echo "Formatting frontend with Prettier..."
	@npx prettier --write "frontend/**/*.{ts,tsx,js,jsx,css,md}"
	@echo "Optionally formatting backend with Ruff/Black (ignored if not installed)..."
	@bash -lc 'command -v ruff >/dev/null 2>&1 && ruff format backend || true'
	@bash -lc 'command -v black >/dev/null 2>&1 && black backend || true'

clean:
	@echo "Cleaning project..."
	@rm -rf frontend/node_modules frontend/dist .venv .pytest_cache
	@find backend -type d -name __pycache__ -prune -exec rm -rf {} +


