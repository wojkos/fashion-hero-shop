## ADDED Requirements

### Requirement: HeroPoints link in account page header
The `/account` page SHALL display a "HeroPoints" link right-aligned next to the "Hello, {name}" heading, navigating to `/account/loyalty`.

#### Scenario: Link is visible on account page
- **WHEN** an authenticated user views `/account`
- **THEN** a "HeroPoints" link SHALL appear to the right of the "Hello, {name}" heading

#### Scenario: Link navigates to loyalty page
- **WHEN** the user clicks the "HeroPoints" link
- **THEN** the browser SHALL navigate to `/account/loyalty`
