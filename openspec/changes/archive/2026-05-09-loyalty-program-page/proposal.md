## Why

FashionHero has no loyalty program yet. Introducing HeroPoints gives customers a visible reward for repeat purchases, increases retention, and creates a discount incentive (up to 10%) that encourages higher spend — all with zero backend required in this phase (fully mocked).

## What Changes

- Add `/account/loyalty` page displaying the user's HeroPoints balance, level, progress to next level, and discount tier
- Add a "HeroPoints" link on the `/account` page, right-aligned next to the "Hello, {name}" greeting
- Mock point transactions list shown below the loyalty hero section (no real backend)
- Loyalty levels: every 100 points = +1% discount, max 10 levels (1 000 points = 10%)

## Capabilities

### New Capabilities

- `loyalty-page`: Full loyalty dashboard page at `/account/loyalty` showing HeroPoints balance, level progress bar, discount badge, and a mocked transaction history list
- `account-loyalty-link`: Link in the account page header area (right-aligned next to the welcome greeting) pointing to `/account/loyalty`

### Modified Capabilities

- `account-page`: Adding a HeroPoints link aligned to the right next to the "Hello, {name}" heading — no requirement changes beyond adding the link element

## Impact

- New file: `src/app/account/loyalty/page.tsx`
- Modified file: `src/app/account/page.tsx` (add link)
- No new dependencies required; uses existing Tailwind/shadcn setup
- No backend or API changes; all data is mocked client-side
