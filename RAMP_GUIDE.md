## Ramp Guide (Step-by-Step)

Follow these steps end-to-end. Start by creating your own repo from this template.

### 0) Create your repo from this template

1) On GitHub click “Use this template” → “Create a new repository”
2) Choose owner, name (e.g., `edge-boot-<you>`), visibility Public
3) Clone locally:
   ```bash
   git clone https://github.com/<you>/<your-repo>.git
   cd <your-repo>
   git checkout -b ship-bootstrap/<your-name>
   ```
4) Turn on branch protection for `main` (see `GUIDE.md`)

### 1) Install prerequisites

- Node via nvm (reads `.nvmrc`):
  ```bash
  nvm install
  nvm use
  ```
- Python virtualenv (ensure `python3 --version >= 3.12`; use `python3.12` if needed):
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  # PowerShell: .\.venv\Scripts\Activate.ps1
  ```

### 2) Install dependencies

- Backend (from repo root, venv active): `pip install -e "backend[dev]"`
- Frontend (from repo root):
  ```bash
  npm --prefix frontend install  # first run to sync lockfile
  npm --prefix frontend ci
  ```

### 3) Run the dev servers

```bash
make dev  # backend :8000, frontend :5173
```

Check:
- `http://localhost:8000/healthz` → `{ "status": "ok" }`
- Frontend shows empty list + add form

### 4) Make the tiny change

- In `frontend/src/components/AddItem.tsx` add `placeholder="Describe your item"`
- Ensure empty submissions are blocked (min length 1)
- In `backend/tests/test_items.py` add an assertion (e.g., `assert "T" in item["created_at"]`)
- Run backend tests: `pytest -q`

### 5) Open a PR and confirm CI

1) Commit changes and push branch
2) Open a PR against `main`
3) Confirm CI (Actions tab) shows two green jobs (backend, frontend) – workflow lives in `.github/workflows/ci.yml`
4) Fill out the PR template in `.github/pull_request_template.md` (include AI usage)

### Troubleshooting

- **Python version**: `python3 --version` must be ≥ 3.12
- **Node missing**: run `nvm install && nvm use`
- **CI failure**: open the failed job log in Actions, fix locally, push again
- **Help request**: use `.github/ISSUE_TEMPLATE/help_request.md`


