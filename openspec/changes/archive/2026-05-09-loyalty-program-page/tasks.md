## 1. Account Page — Loyalty Link

- [x] 1.1 Wrap the "Hello, {name}" heading and the new link in a `flex items-baseline justify-between` container in `src/app/account/page.tsx`
- [x] 1.2 Add a `<Link href="/account/loyalty">` styled as a small right-aligned label (e.g., `text-[11px] text-warm-gray underline hover:text-charcoal`) next to the heading

## 2. Loyalty Page Scaffold

- [x] 2.1 Create directory `src/app/account/loyalty/` and file `page.tsx` with `"use client"` directive
- [x] 2.2 Add auth guard: redirect to `/account/login` if user is not authenticated (mirror pattern from account page)

## 3. Mock Data

- [x] 3.1 Define a `MOCK_POINTS = 350` constant and a `mockTransactions` array (≥3 items, each with `id`, `date`, `description`, `points`) sorted newest-first

## 4. Level & Progress Logic

- [x] 4.1 Compute `level = Math.min(Math.floor(points / 100), 10)` and `discount = level` (%)
- [x] 4.2 Compute `progress = points % 100` for progress bar; cap display at max level when `level === 10`

## 5. HeroPoints Hero Section

- [x] 5.1 Render a top section showing the HeroPoints icon/gear (use a Lucide `Settings2` or `Star` icon), total points in large type, level badge, and discount badge
- [x] 5.2 Render a labeled progress bar (`progress / 100 * 100%` width) with "X / 100 pts to Level N+1" label; show "Max Level" text when at level 10

## 6. Transaction History

- [x] 6.1 Render a section below the hero area titled "Points History" listing each mock transaction with order reference, date, and `+N pts` badge
- [x] 6.2 Style consistently with the account page (border-b rows, warm-gray secondary text, charcoal primary text)

## 7. Navigation & Polish

- [x] 7.1 Add breadcrumb: Home → Account → HeroPoints (matching account page breadcrumb style)
- [x] 7.2 Add a "Back to Account" link at the bottom of the page
- [x] 7.3 Verify the page is responsive and matches FashionHero design language (font sizes, spacing, color tokens)

