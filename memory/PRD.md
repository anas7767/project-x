# FERI Wholesale — PRD

## Original Problem Statement
> "ye jo mai ye mera startup hai to isme teri help hona bnane me"
> (Hindi/Hinglish: This is my startup, please help me build it.)

User uploaded `feri-wholesale.tar.gz` — an existing pnpm-workspace codebase for **FERI Wholesale**, India's B2B platform connecting kirana retailers with FMCG brands (instant credit + direct ordering + 60-day exchange).

## User Decisions (Captured)
- **Help type**: Add new features to existing project (option b).
- **First priority**: Landing page redesign — current "full blue" look is not appealing; user wants it **more white and beautiful**.
- **Then**: Expand product list / catalog & cart.
- **DB / hosting**: User left to assistant's choice.
- **3rd-party API keys**: None yet — will be added later when needed.

## User Personas
1. **Kirana Retailer** — small Indian retail shop owner, mobile-first, needs wholesale stock with credit.
2. **FMCG / Local Brand** — manufacturer wanting distribution without a sales team.
3. **Admin** — FERI operator approving KYC, managing credit limits, monitoring orders.

## Core Requirements (Static)
- Role-based auth: retailer / brand / admin.
- Curated wholesale product catalog with cart & checkout.
- Order management (retailer, brand, admin views).
- Credit tracker with Net-15/30/60 day terms.
- 60-day product exchange flow.
- Landing page (marketing) + dashboards for each role.

## Architecture (current state)
- **Frontend**: React 19 + Vite 7 + Tailwind 4 + shadcn/ui + Wouter routing + TanStack Query + Framer Motion at `/app/frontend` — runs on port 3000 via supervisor (`yarn start` → `vite`).
- **Backend**: NOT yet wired in this environment (original Express + Postgres backend was scoped out for phase 1). The Python FastAPI stub at `/app/backend` still runs on 8001 but is unused. To be replaced/wired in phase 2 when product catalog / auth flows come online.
- **DB**: Pending — will decide between Postgres+Drizzle (original) vs MongoDB (default in this environment) in phase 2.
- API client (`@workspace/api-client-react`) consolidated into `/app/frontend/src/lib/api` and aliased in `vite.config.ts` / `tsconfig.json`.

## What's Been Implemented

### Phase 1 — Jan 2026 (current)
- ✅ Migrated FERI Vite app into `/app/frontend` (single-package, yarn-based, no pnpm workspace dependency).
- ✅ Vite dev server running on port 3000 via supervisor; `vite.config.ts` proxies `/api` → `localhost:8001` for future backend wiring.
- ✅ **Landing page completely redesigned** (`src/pages/landing.tsx`):
  - Switched from full-navy dark theme to **premium light/off-white** theme.
  - Brand colors retained as **accents only**: navy `#003087`, gold `#FFD700`, saffron `#FF9933`.
  - New typography: **Bricolage Grotesque** (headings) + **Plus Jakarta Sans** (body).
  - Sections: sticky white-glass navbar, asymmetric hero with floating credit/order badges + kirana shop photo, brand marquee, 4-up stats strip, 3-step "How it works", **bento-style** features grid with imagery, dark-navy "For Brands" CTA with brand snapshot card, final CTA, multi-column footer.
  - All interactive elements have `data-testid`s, all sections have entrance animations via Framer Motion, fully responsive (mobile menu, single-column collapse).

## Prioritized Backlog

### P0 (next session if user agrees)
- [ ] **Product catalog expansion** — user explicitly said: "apne ko jo product hai or cart lish badhana hai phele". Need to (a) decide on backend stack, (b) seed a richer catalog (categories: FMCG, snacks, spices, dairy, beverages, personal care; ~50–100 SKUs), (c) wire to retailer products + cart pages.
- [ ] Pick backend stack: **Option A** — port Express+Postgres+Drizzle into this env (install Postgres locally / use Neon). **Option B** — rebuild backend as FastAPI + MongoDB (faster to spin up here). Pending user confirmation.

### P1
- [ ] Redesign auth pages (login, register-retailer, register-brand) to match the new light theme.
- [ ] Retailer dashboard polish (home, products, cart, orders, credit) — currently still dark-themed from original code.
- [ ] Brand dashboard polish + analytics charts revamp.
- [ ] Admin dashboard polish.

### P2 (future)
- [ ] Payment gateway (Razorpay / Stripe).
- [ ] SMS / WhatsApp OTP login (Twilio / Gupshup).
- [ ] GST invoice generation + PDF download.
- [ ] Delivery tracking with map + live ETA.
- [ ] Push notifications for order status.
- [ ] Multilingual UI (Hindi / Marathi).

## Next Tasks
1. Confirm backend stack with user (Postgres vs MongoDB).
2. Seed expanded product catalog.
3. Redesign auth pages + retailer dashboard to match landing-page theme.
