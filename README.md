# Jhon Francis Dela Cruz — Portfolio

React/Vite portfolio frontend and Django REST backend. The original static portfolio and its assets are retained separately in the supplied archive; migrated assets are copied to `frontend/public/portfolio/assets/`.

## Local development (Git Bash)

### Backend

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
python -m pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py test
python manage.py runserver 127.0.0.1:8000
```

The backend uses SQLite locally when `DATABASE_URL` is empty. Set `DATABASE_URL` in `backend/.env` to the Supabase PostgreSQL connection string to use Supabase; the connection is configured to require SSL. Set a private `DJANGO_SECRET_KEY` and `DJANGO_DEBUG=false` for deployment. Do not commit `.env`.

The public health check is `GET http://127.0.0.1:8000/api/health/`. The REST framework defaults to authenticated requests; public resource endpoints must opt into public permissions explicitly.

### Frontend

In another terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open the Vite URL printed in the terminal (normally `http://localhost:5173`). During local development, Vite proxies `/api/*` to Django on port 8000. For a separately hosted API, set `VITE_API_BASE_URL` in `frontend/.env` to its `/api` URL.

Useful checks:

```bash
npm test
npm run lint
npm run build
```

## Current routes

- `/` — home
- `/about` — about
- `/projects` — current project showcase
- `/skills` — technology stack
- `/contact` — contact links; the inquiry form will connect to the backend in a later stage

Legacy static paths such as `/Stack.html` and `/project-inquiry.html` redirect to their React routes.

## Stage 1 status

The shared React routes and grayscale Bento landing page are in place. The original fixed navbar has been migrated with its responsive burger, active-route styling, scroll hide/reveal, visitor/live counters, theme control, and hover transitions; because the site must stay dark, the theme control switches between black and charcoal instead of light mode. The Stack page preserves the original numbered groups, IntersectionObserver reveal timing, alternating group delay, 55ms pill staggering, spring-like pill entrance, and logo hover scale/rotation, with logos and project imagery rendered in monochrome. The global 18px grid and landing-only cursor grid reveal remain. Projects and skills are still static frontend content until their Django models and API endpoints are implemented. Supabase connectivity is not configured until a database URL is supplied locally.
