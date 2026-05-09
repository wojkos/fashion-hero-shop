## Context

The FashionHero account area currently shows order history, account details, and saved addresses. There is no loyalty/rewards mechanism. This change introduces a fully client-side mocked HeroPoints loyalty page and a navigation entry point from the existing account page.

The stack is Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, and shadcn/ui primitives. No backend or API layer is available for this phase — all loyalty data is hardcoded mock data.

## Goals / Non-Goals

**Goals:**
- Deliver a visually polished `/account/loyalty` page matching the FashionHero design language
- Show HeroPoints balance, current level, progress bar to next level, and active discount
- Display a mocked transaction list (points earned per order)
- Add a right-aligned "HeroPoints" link next to the welcome heading on the account page

**Non-Goals:**
- Backend integration, API endpoints, or persistent storage
- Real point calculation based on actual orders
- Admin UI or point management tooling
- Email notifications for level-ups

## Decisions

### 1. Pure mock data — no hooks abstraction yet

Since there is no backend, loyalty data (points balance, transaction history) is defined as a static constant inside the page component. A hook (`useLoyalty`) is intentionally deferred until a real API exists to avoid premature abstraction.

**Alternative considered:** A context/provider for loyalty state — rejected because the single page is self-contained and adding global state for mocked data adds unnecessary complexity.

### 2. Level calculation co-located with display logic

Level = `Math.floor(points / 100)`, capped at 10. Discount = `level %`. Progress to next level = `points % 100`. This is a pure function that lives in the page file for now.

**Alternative considered:** Shared utility in `lib/loyalty.ts` — deferred until backend integration.

### 3. Link placement: flex row next to the heading

The account page heading area (`<h1>Hello, {name}</h1>`) is wrapped in a `flex items-baseline justify-between` container. The "HeroPoints" link sits right-aligned as a small styled anchor. This avoids restructuring the existing layout.

## Risks / Trade-offs

- [Mock data diverges from real data at integration time] → Keep mock structure close to the expected API shape so migration is a data-swap, not a redesign.
- [Progress bar at 0 points looks empty/broken] → Show a minimal sliver or "Get started" state for 0 points.

## Migration Plan

No migration required for this phase. When a backend is ready:
1. Extract mock data to a real API call inside a `useLoyalty` hook
2. Replace the static import in the page with the hook result
3. No UI changes expected if the data shape is preserved
