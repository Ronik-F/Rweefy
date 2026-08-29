# Ronik Portfolio — UI/UX Implementation Plan

## 0. Project structure direction

The source tree should separate route entry points, reusable UI, navigation
infrastructure, and feature-specific components. The first cleanup applies that
rule without introducing a premature `src/` wrapper or unnecessary abstractions.

### Target structure

```text
app/
  globals.css
  layout.js
  page.js
  tracker/
    page.js

components/
  navigation/              Site-wide navigation infrastructure
    Logo.js
    Navbar.js
    NavigationContext.js
    Sidebar.js
  home/                    Home-specific sections
    Hero.js
  tracker/                 Tracker feature UI
    Heatmap.js
    ProgressRing.js
    StatCard.js
    TrackerCard.js
    TrendChart.js
  ui/                      Small reusable presentation primitives
    AnimatedText.js

lib/
  navigation.js            Navigation data/configuration
  motionVariants.js        Shared animation presets

public/
  fonts/
  images/
  logo/
```

### Structure changes made

- Renamed `components/layout/` to `components/navigation/` because its current
  contents are exclusively the navbar, drawer, logo, and navigation state.
- Updated root layout and home page imports to use the new boundary.
- Kept tracker UI grouped by feature instead of scattering chart primitives into
  a generic UI directory.
- Kept route files inside `app/` intentionally thin; they should compose
  components rather than contain large presentation implementations.

### Changes that will help as the project grows

1. Keep one source of truth for navigation labels and paths in
   `lib/navigation.js`; do not maintain separate hard-coded desktop and drawer
   menus.
2. Add a shared `components/layout/PageShell.js` only when multiple pages need
   the same content width/header/footer treatment. Do not use `layout` as a
   catch-all folder again.
3. Add feature data near the feature boundary (for example,
   `lib/tracker/data.js`) once tracker values stop being demo constants.
4. Add route-local private folders such as `app/tracker/_components/` only for
   components that are not reused outside that route.
5. Use `public/images/` for content imagery and keep filenames canonical and
   lowercase; avoid importing assets through ambiguous paths.
6. Introduce `components/shared/` only when a component is genuinely shared
   across two or more feature areas. Most one-purpose components should remain
   beside their feature.
7. Add `lib/metadata.js`, `lib/formatters.js`, or similar utility modules only
   when repeated logic appears; avoid creating empty category folders.

## 1. Current baseline

This project is a private Next.js 16 portfolio using the App Router, React 19,
Tailwind CSS 4, Framer Motion, and Lucide icons. The current visual direction is
dark, minimal, editorial, and data-oriented.

### Current structure

```text
app/
  globals.css              Global theme, fonts, colors, and base styles
  layout.js                Root metadata, font setup, navigation provider/sidebar
  page.js                  Home page shell: Navbar + Hero
  tracker/page.js          Tracker dashboard route (currently untracked)

components/
  home/Hero.js             Full-screen portrait hero and animated headline
  navigation/Logo.js       Animated logo/menu toggle control
  navigation/Navbar.js     Fixed top navigation and menu icon
  navigation/NavigationContext.js
                            Shared open/close/toggle state for the drawer
  navigation/Sidebar.js    Animated recursive navigation drawer
  ui/AnimatedText.js       Reusable word-by-word Framer Motion text animation
  tracker/
    Heatmap.js             Generated study-hours heatmap (currently untracked)
    ProgressRing.js        SVG progress ring
    StatCard.js            Small metric card
    TrackerCard.js         Daily vitality card
    TrendChart.js          Inline SVG focus-density chart

lib/
  navigation.js             Central navigation tree
  motionVariants.js         Shared motion presets

public/
  fonts/                   General Sans font files
  logo/roniklogo.jpg       Available logo asset

Configuration:
  package.json              Scripts and dependencies
  next.config.mjs           React Compiler enabled
  tailwind.config.js        Present but currently empty
  postcss.config.mjs        Tailwind/PostCSS integration
  eslint.config.mjs         Next.js Core Web Vitals ESLint config
  jsconfig.json             @/* import alias
```

## 2. What exists right now

### Global foundation

- Dark `#0a0a0a` background with white foreground and muted white tokens.
- General Sans for the main UI and JetBrains Mono for technical labels/metrics.
- Tailwind CSS 4 theme tokens defined in `app/globals.css`.
- Antialiased rendering, horizontal overflow prevention, and custom selection
  colors.
- Root metadata identifies the site as “Ronik Koirala — Portfolio”.
- React Compiler and path aliases are enabled.

### Home page

- A full viewport hero section with a minimum height of 700px.
- Large animated headline: “minimal, works &, even, better.”
- Supporting statement: “i don't like unnecessary complexity — in design, or in
  life.”
- Fixed header with animated logo and desktop links for About, Tracker, and
  Contacts.
- Logo control opens/closes the animated left navigation drawer.
- Framer Motion presets provide fade, scale, stagger, and word-slide animations.

### Navigation system

- `NavigationProvider` owns drawer state.
- `Sidebar` is an animated, independently scrollable drawer with a blurred
  backdrop.
- Navigation is data-driven through `lib/navigation.js`.
- Parent items support expandable child routes.
- Active route detection and active indicators are implemented.
- Current navigation model includes Home, About, Work, Tracker, and Contact,
  with nested Work and Tracker sections.

### Tracker dashboard

- Dashboard header with “TRACKER.” title and system status labels.
- Three SVG progress rings for sleep, diet, and exercise.
- One-year study-hours heatmap with intensity legend and month labels.
- Weekly focus-density area/line chart with axis labels and average hours.
- Four summary metrics: deep work sessions, books read, resting heart rate, and
  current streak.
- The tracker components use static/demo values and randomized heatmap cells,
  not persisted user data.

## 3. Baseline issues and UX risks

These should be resolved before or during the first UI pass:

1. `Hero.js` references `/images/hero.png`, but no matching tracked public image
   is currently present.
2. `Logo.js` references `/logo/rk-logo.jpg`, while the available asset is
   `public/logo/roniklogo.jpg`.
3. `Navbar.js` renders a menu button but does not connect it to
   `useNavigation().toggle`; the logo is currently the functional drawer
   trigger.
4. Navbar links (`/about`, `/contacts`) and most entries in the central
   navigation tree do not have corresponding routes yet.
5. The tracker route and tracker components are untracked in the current
   worktree and should be intentionally reviewed before being considered part
   of the product baseline.
6. `Heatmap.js` creates random values during render, so the visual changes on
   refresh and is not a reliable representation of data.
7. Charts and metrics have no data model, loading state, empty state, tooltips,
   or interaction model yet.
8. Accessibility needs a dedicated pass: drawer focus management, Escape-key
   close, body scroll locking, visible focus states, and reduced-motion behavior
   are not fully defined.
9. The README is still the default create-next-app document and does not explain
   this portfolio’s routes, design system, or development conventions.

### Tracker polish completed

- Constrained the tracker to a centered `max-w-6xl` content frame.
- Reduced oversized heading/card spacing and added responsive gutters.
- Made the navbar available consistently on the tracker route.
- Wired the navbar menu button to the shared navigation drawer.
- Replaced random heatmap generation with deterministic demo values to prevent
  hydration mismatches.
- Added 4W, 12W, 6M, and 1Y controls; the focus chart now recalculates its
  plotted points and average from the selected range.
- Made the tracker header logo-only and kept the chart plotting area compact
  with a fixed responsive height.

## 4. Implementation roadmap

### Phase 0 — Baseline and product direction (current)

- [x] Establish Next.js App Router project and root layout.
- [x] Establish dark editorial visual language.
- [x] Add General Sans and JetBrains Mono typography.
- [x] Add reusable motion variants and animated text.
- [x] Build the home hero composition.
- [x] Build the animated navigation drawer foundation.
- [x] Add the first tracker dashboard concept.
- [ ] Confirm which current worktree files are intended to be committed.
- [ ] Replace broken asset references and define the canonical asset naming.
- [ ] Decide the final information architecture before creating every route.

### Phase 1 — UI/UX foundation

- Define a compact design system: colors, type scale, spacing, borders,
  radii, shadows, motion timings, and responsive breakpoints.
- Create a shared page shell so home, work, tracker, about, and contact pages
  share consistent header, content width, spacing, and footer behavior.
- Normalize navigation labels and routes (`Contact` vs `Contacts`, and the
  relationship between top navigation and drawer navigation).
- Make all navigation controls functional and accessible.
- Add responsive behavior for mobile, tablet, and desktop, including a
  deliberate mobile menu experience.
- Add reduced-motion variants and keyboard/focus states.

### Phase 2 — Home page experience

- Replace the missing hero asset with an intentional, optimized portrait or
  editorial visual treatment.
- Refine hero hierarchy, contrast, text wrapping, and CTA/action discovery.
- Add the next content sections: short positioning statement, selected work
  preview, capabilities, and contact prompt.
- Design scroll transitions that support the story without distracting from the
  headline.
- Validate the first viewport at common mobile and desktop sizes.

### Phase 3 — Work and case-study UX

- Create a project content model with title, role, year, summary, disciplines,
  cover image, outcomes, and links.
- Build selected work, projects, and experiments indexes.
- Build a case-study template with clear metadata, narrative rhythm, media
  handling, and next-project navigation.
- Add image optimization, responsive art direction, captions, and meaningful
  alt text.
- Add hover/focus states that remain usable on touch devices.

### Phase 4 — About and contact

- Create an About page with concise biography, working principles, capabilities,
  experience, and currently learning/doing signals.
- Create a Contact page with primary email/social actions and a clear
  availability statement.
- Add copywriting and content guidelines so the voice stays minimal and
  personal rather than generic.
- Provide success/error states for any contact form only if a backend or
  service is chosen.

### Phase 5 — Tracker productization

- Decide whether the tracker is public, private, or a curated public snapshot.
- Replace randomized/static values with a typed data source.
- Add stable heatmap data, meaningful date ranges, tooltips, and responsive
  chart behavior.
- Add filters or tabs only where they improve comprehension.
- Define empty, loading, stale-data, and error states.
- Add privacy boundaries and avoid exposing sensitive health data by default.

### Phase 6 — Quality, performance, and launch

- Verify all routes, assets, metadata, Open Graph previews, and 404 behavior.
- Run accessibility checks with keyboard navigation and screen-reader labels.
- Check responsive layouts and motion preferences across supported browsers.
- Optimize image sizes, font loading, and above-the-fold performance.
- Run the existing lint/build scripts and fix regressions.
- Replace the default README with project-specific setup and content guidance.
- Deploy a preview and perform a final visual QA pass before production.

## 5. Definition of done for the UI/UX pass

- No broken links or missing visual assets.
- Every visible control has a clear action, hover/focus state, and accessible
  name.
- Navigation works consistently with mouse, touch, and keyboard.
- Core pages have intentional desktop/mobile layouts, not just stacked desktop
  styles.
- Typography, spacing, color, borders, and animation feel like one system.
- Motion supports hierarchy and can be reduced or disabled.
- Home, Work, About, Contact, and Tracker have clear next actions.
- Content and data states are explicit instead of relying on placeholders or
  random rendering.
