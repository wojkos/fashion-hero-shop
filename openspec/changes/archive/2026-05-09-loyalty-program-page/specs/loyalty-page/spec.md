## ADDED Requirements

### Requirement: Display HeroPoints balance and level
The page at `/account/loyalty` SHALL display the user's current HeroPoints total, their current level (1–10), and their active discount percentage.

#### Scenario: User with points below first level threshold
- **WHEN** the user visits `/account/loyalty` and has fewer than 100 points
- **THEN** the page SHALL show level 0, 0% discount, and a progress bar indicating distance to level 1

#### Scenario: User at mid-tier level
- **WHEN** the user has 350 HeroPoints
- **THEN** the page SHALL show level 3, 3% discount, and progress bar at 50/100 toward level 4

#### Scenario: User at maximum level
- **WHEN** the user has 1000 or more HeroPoints
- **THEN** the page SHALL show level 10, 10% discount, and the progress bar SHALL indicate maximum level reached

### Requirement: Progress bar to next level
The loyalty page SHALL show a visual progress bar indicating how many points the user needs to reach the next level.

#### Scenario: Progress bar reflects current points
- **WHEN** the user's points modulo 100 equals 60
- **THEN** the progress bar SHALL be filled to 60%

#### Scenario: Progress bar at maximum level
- **WHEN** the user is at level 10
- **THEN** the progress bar SHALL be fully filled and labeled as max level

### Requirement: Mocked transaction history
The loyalty page SHALL display a list of mocked point transactions below the HeroPoints summary section, including both earned and deducted points.

#### Scenario: Transaction list is visible
- **WHEN** the user visits `/account/loyalty`
- **THEN** a list of at least 3 transactions SHALL be shown, each with an order reference, date, and points change

#### Scenario: Transaction list is ordered newest first
- **WHEN** the transaction list renders
- **THEN** the most recent transaction SHALL appear at the top

#### Scenario: Return transactions show negative points in red
- **WHEN** a transaction has a negative points value (i.e. a return)
- **THEN** the points SHALL be displayed in red with a minus sign (e.g. `-59 pts`)
- **AND** positive transactions SHALL remain displayed in green with a plus sign

#### Scenario: Level-down badge on qualifying return
- **WHEN** a return transaction causes the user's level to drop
- **THEN** the transaction row SHALL display a "level down" badge next to the description

### Requirement: Loyalty page requires authentication
The `/account/loyalty` page SHALL redirect unauthenticated users to `/account/login`.

#### Scenario: Unauthenticated access
- **WHEN** a user without an active session navigates to `/account/loyalty`
- **THEN** they SHALL be redirected to `/account/login`
