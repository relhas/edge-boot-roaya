## Core Guide (Checklist + Prompts)

No hand-holding. Hit the targets, explain trade-offs.

**Start from the template**, ship the same healthz/items backend and items UI, then decide which improvements (and trade-offs) matter most.

### Targets

- [ ] Public repo with scaffold
- [ ] Branch protection on `main`
- [ ] Feature branch → squash merge via PR
- [ ] Green CI (backend pytest, frontend build/typecheck)
- [ ] `/healthz` → `{ status: "ok" }`
- [ ] `/items` GET/POST returning `{id, text, created_at}`, newest first
- [ ] Frontend lists items and can add one

### Optional improvements (choose a few)

- Optimistic UI for add
- Minimal error boundary
- Client-side validation (e.g., Zod)
- Fetch retry/backoff strategy
- Docker devcontainer instead of venv
- Alternate lint/format tooling
- CI tweaks (extra checks, different provider)

### Explain and defend (answer in PR description)

- Which improvements did you prioritize, and why?
- What trade-offs did you make to meet the functional requirements?
- If you diverged from the template, what drove that choice?
- How did you balance shipping fast vs. keeping it maintainable?

Reference docs: `README.md`, `.github/workflows/ci.yml`, `.github/pull_request_template.md`, `.github/ISSUE_TEMPLATE/help_request.md`.


