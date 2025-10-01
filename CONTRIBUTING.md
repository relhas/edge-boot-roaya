## Contributing

### Branching

Use feature branches named:

- `ship-bootstrap/<name>`
- Or your team slug, e.g., `ship-bootstrap/core-team`

Squash merge via PR into `main`. Keep `main` protected.

### Commits

Conventional commits are optional but recommended:

```
feat: add items list
fix: handle empty text validation
docs: add ramp guide steps
```

### Run tests locally

Backend:

```bash
cd backend
pytest -q
```

Frontend:

```bash
npm --prefix frontend run build
npm --prefix frontend run typecheck
```


