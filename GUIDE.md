## Guide (Spec + Policies)

Use this document as the source of truth for objectives, rubric, and shared policies. For how-to steps, jump to:

- Ramp (step-by-step): [RAMP_GUIDE.md](RAMP_GUIDE.md)
- Core (checklist + prompts): [CORE_GUIDE.md](CORE_GUIDE.md)
- CI & templates: see `.github/` (workflow, PR template, help-request template)

### Objectives and Deliverables

- Fresh, public repository with clear scaffolding
- Feature branch workflow, squash merge via PR
- Branch protection on `main` (no direct pushes, require PR and CI)
- CI green (backend and frontend)
- Backend:
  - `GET /healthz` → `{ "status": "ok" }`
  - `/items` → `GET` list, `POST` create `{text}`; returns `{id, text, created_at}`
- Frontend:
  - Renders items
  - Can add an item

### Pass/Fail Rubric

- Must pass:
  - Repo created fresh and public
  - Branch protection on `main`
  - Work on feature branch, squash merge via PR
  - CI green (both jobs)
  - `/healthz` works; `/items` GET/POST work
  - Frontend can add and render items
- Stretch:
  - Optimistic UI for add
  - Minimal error boundary
  - Input length validation on client and server

### Stuck Protocol

1) Reproduce the issue. 2) Copy the first 20 lines of the error. 3) Search for that exact error message. 4) Make a tiny change and retry. 5) Ask for help using the issue template with: OS, versions, exact command, error snippet, steps tried.

### AI Policy

AI is allowed for scaffolding and routine code generation. Your PR description must include an “AI usage” section listing suggestions accepted and code you wrote yourself.

### Branch Protection (Docs Only)

GitHub → Settings → Branches → Branch protection rules → Add rule:

- Branch name pattern: `main`
- Require a pull request before merging (squash merge allowed)
- Require status checks to pass before merging (select your CI workflow)
- Restrict who can push to matching branches (optional for public forks)

Placeholder screenshot:

![Branch protection settings](docs/screenshots/branch-protection.png)

### High-level workflow

1. Create a public repo using this template (GitHub → Use this template)
2. Protect `main` (require PR, require CI)
3. Work on feature branches, squash merge via PR
4. Keep CI green (backend pytest, frontend build/typecheck)

### What is CI?

Continuous integration (CI) automatically runs our tests and builds whenever you push or open a pull request. The workflow is defined in `.github/workflows/ci.yml` and runs two jobs:
- Backend (Python 3.12): `pip install -e "backend[dev]"` then `pytest -q backend/tests`
- Frontend (Node 22): `npm --prefix frontend ci`, `npm --prefix frontend run build`, `npm --prefix frontend run typecheck`

The CI must be green before merging. Use the GitHub Actions tab to inspect failures and rerun after fixing.


