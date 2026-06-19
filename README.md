# Ugenix Academy

**Practical Skills. Real Impact. Job Ready.**

Professional training academy website for Ugenix Academy — built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. The site promotes programs (WorkSim, Prompt Engineering, V.I.S.T.A.), handles student registrations, and presents a dark, premium industrial brand experience.

**Live URL (default):** [https://academy.ugenix.in](https://academy.ugenix.in)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Feature Flags](#feature-flags)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [API Routes](#api-routes)
- [Registration Flows](#registration-flows)
- [Design System](#design-system)
- [Home Page](#home-page)
- [Programs & Data](#programs--data)
- [Components](#components)
- [Public Assets](#public-assets)
- [SEO & Metadata](#seo--metadata)
- [Maintenance Mode](#maintenance-mode)
- [Admin Dashboard](#admin-dashboard)
- [Deployment](#deployment)
- [Related Documentation](#related-documentation)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + custom CSS in `app/globals.css` |
| Animation | Framer Motion (`framer-motion`, `motion`) |
| Icons | [Lucide React](https://lucide.dev/) |
| Payments | [Razorpay](https://razorpay.com/) (WorkSim) |
| File uploads | [Cloudinary](https://cloudinary.com/) (Prompt Engineering payment screenshots) |
| Forms backend | Google Apps Script → Google Sheets |
| Analytics | [@vercel/analytics](https://vercel.com/docs/analytics) |
| Utilities | `clsx`, `tailwind-merge` (`cn()` helper) |
| Image optimization | Next.js `Image` + Sharp |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

### Environment setup

Copy `.env.example` to `.env.local` and fill in values before testing registrations, uploads, or payments:

```bash
cp .env.example .env.local
```

### Stale build cache

If you see errors like `Cannot find module './682.js'`, delete `.next` and restart the dev server:

```bash
rm -rf .next
npm run dev
```

---

## Environment Variables

| Variable | Required for | Description |
|----------|--------------|-------------|
| `NEXT_PUBLIC_SITE_URL` | SEO, sitemap, OG | Canonical site URL (no trailing slash) |
| `CLOUDINARY_CLOUD_NAME` | Prompt Engineering registration | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Prompt Engineering registration | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Prompt Engineering registration | Cloudinary API secret |
| `GOOGLE_SCRIPT_URL` | Prompt Engineering registration | Google Apps Script web app URL |
| `GOOGLE_SCRIPT_SECRET_TOKEN` | Prompt Engineering registration | Secret token validated by Apps Script |
| `GOOGLE_VISTA_SCRIPT_URL` | V.I.S.T.A. registration | Separate Apps Script URL for V.I.S.T.A. |
| `GOOGLE_VISTA_SCRIPT_SECRET_TOKEN` | V.I.S.T.A. registration | V.I.S.T.A. secret token |
| `RAZORPAY_KEY_ID` | WorkSim payment (server) | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | WorkSim payment (server) | Razorpay key secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | WorkSim payment (client) | Public Razorpay key for checkout |
| `WORKSIM_REGISTRATION_AMOUNT_PAISE` | WorkSim payment | Amount in paise (`50000` = ₹500) |
| `GOOGLE_WORKSIM_SCRIPT_URL` | WorkSim registration | WorkSim Apps Script URL (falls back to `GOOGLE_SCRIPT_URL`) |
| `GOOGLE_WORKSIM_SCRIPT_SECRET_TOKEN` | WorkSim registration | WorkSim secret (falls back to `GOOGLE_SCRIPT_SECRET_TOKEN`) |

See `.env.example` for placeholders and setup notes.

---

## Feature Flags

Controlled in `lib/constants.ts`:

| Constant | Current default | Effect |
|----------|-----------------|--------|
| `PROMPT_ENGINEERING_ENDED` | `true` | Closes `/register` (Prompt Engineering) |
| `WORKSIM_REGISTRATION_ENDED` | `false` | Closes `/register/worksim` and disables WorkSim Register CTAs |
| `WORKSIM_REGISTRATION_FEE_INR` | `500` | Display fee on WorkSim registration page |
| `VISTA_REGISTRATION_ENDED` | `true` | Closes `/vista` registration form |
| `MAINTENANCE_MODE` | `false` | Shows global maintenance screen instead of the site |

Toggle these flags and redeploy to open or close registrations without code changes elsewhere.

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, Header, Footer, Analytics
│   ├── page.tsx                # Home page (splash + sections)
│   ├── globals.css             # Design tokens, utility classes, button/card styles
│   ├── not-found.tsx           # 404 page (dark theme)
│   ├── robots.ts               # robots.txt (disallows /api/, /admin)
│   ├── sitemap.ts              # XML sitemap
│   │
│   ├── about/                  # About Us page
│   ├── contact/                # Contact page (course + partnership forms)
│   ├── faq/                    # FAQ accordion
│   ├── admin/                  # Admin dashboard (placeholder data)
│   │
│   ├── courses/
│   │   ├── prompt-engineering/ # Past program detail page
│   │   └── worksim/            # Active program detail page
│   │
│   ├── register/
│   │   ├── page.tsx            # Prompt Engineering registration (QR + screenshot)
│   │   └── worksim/            # WorkSim registration (Razorpay)
│   │
│   ├── vista/                  # V.I.S.T.A. idea pitching competition
│   │
│   ├── privacy-policy/
│   ├── terms/
│   ├── refund-policy/
│   └── code-of-conduct/
│   │
│   └── api/
│       ├── submit/             # Prompt Engineering → Google Sheets
│       ├── upload/             # Payment screenshot → Cloudinary
│       ├── vista-submit/       # V.I.S.T.A. → Google Sheets
│       ├── worksim-submit/     # WorkSim → Google Sheets (after Razorpay verify)
│       └── razorpay/
│           └── create-order/   # Create Razorpay order for WorkSim
│
├── components/
│   ├── Header.tsx              # Glassmorphic sticky nav (primary)
│   ├── Footer.tsx              # Site footer with links & social
│   ├── WhyChooseSection.tsx    # Home: why choose Ugenix
│   ├── layout/
│   │   ├── Header.tsx          # Re-export of components/Header.tsx
│   │   ├── Footer.tsx          # Re-export of components/Footer.tsx
│   │   └── MaintenanceScreen.tsx
│   ├── sections/               # Home page section components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── HeroStatCards.tsx
│   │   ├── HeroTrustLogos.tsx
│   │   ├── WhoThisIsForSection.tsx      # (exists, not on current home)
│   │   ├── FeaturedCoursesSection.tsx   # (exists, not on current home)
│   │   ├── FeaturedProgramsSection.tsx  # (exists, not on current home)
│   │   └── HowItWorksSection.tsx        # (exists, not on current home)
│   └── ui/
│       └── hover-border-gradient.tsx
│
├── lib/
│   ├── constants.ts            # Feature flags & fees
│   ├── programs-data.ts        # Upcoming & past program cards
│   ├── faq-data.ts             # FAQ content
│   ├── razorpay.ts             # Razorpay server helpers
│   └── utils.ts                # cn() class merge helper
│
├── public/
│   ├── assets/                 # Feature images, cubes, mockups
│   ├── illustrations/          # Logos, character, brand SVGs
│   └── llms.txt                # LLM/crawler content summary
│
├── tailwind.config.ts          # Color tokens, fonts, radii, animations
├── next.config.js              # Image formats, compression, strict mode
├── .env.example                # Environment variable template
├── README_DESIGN_SYSTEM.md     # Full brand & design reference
└── ACADEMY_PAGE_CONTENT.md     # Home page copy & section content archive
```

---

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home: splash screen, Hero, Features, Why Choose, Programs, CTA |
| `/about` | `app/about/page.tsx` | About Us — mission, approach, parent company (Ugenix) |
| `/courses/prompt-engineering` | `app/courses/prompt-engineering/page.tsx` | Completed Prompt Engineering program detail |
| `/courses/worksim` | `app/courses/worksim/page.tsx` | Active WorkSim program detail + Register CTA |
| `/register` | `app/register/page.tsx` | Prompt Engineering registration (UPI/QR + screenshot) |
| `/register/worksim` | `app/register/worksim/page.tsx` | WorkSim registration (Razorpay checkout) |
| `/vista` | `app/vista/page.tsx` | V.I.S.T.A. idea pitching competition registration |
| `/faq` | `app/faq/page.tsx` | Frequently asked questions |
| `/contact` | `app/contact/page.tsx` | Course queries & partnership forms (client-side only) |
| `/admin` | `app/admin/page.tsx` | Admin dashboard placeholder (mock data) |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Privacy policy |
| `/terms` | `app/terms/page.tsx` | Terms of service |
| `/refund-policy` | `app/refund-policy/page.tsx` | Refund policy |
| `/code-of-conduct` | `app/code-of-conduct/page.tsx` | Code of conduct |

**Not in sitemap:** `/vista`, `/admin` (V.I.S.T.A. is a past/on-campus program; admin is internal).

---

## API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/upload` | POST | Upload payment screenshot to Cloudinary (max 10 MB, images only) |
| `/api/submit` | POST | Submit Prompt Engineering registration to Google Sheets |
| `/api/vista-submit` | POST | Submit V.I.S.T.A. team registration to Google Sheets |
| `/api/razorpay/create-order` | POST | Create Razorpay order for WorkSim (`{ program: "worksim" }`) |
| `/api/worksim-submit` | POST | Verify Razorpay signature, then submit WorkSim registration |

All submission routes validate required fields, use a 30-second timeout, and return JSON `{ success, submissionId }` or `{ error }`.

---

## Registration Flows

### 1. Prompt Engineering (`/register`)

**Status:** Closed when `PROMPT_ENGINEERING_ENDED = true`.

1. Student fills: name, course year, branch, phone, email
2. Pays via UPI/QR (details shown on page)
3. Uploads payment screenshot → `/api/upload` → Cloudinary
4. Submits form → `/api/submit` → Google Apps Script → Google Sheets

### 2. WorkSim (`/register/worksim`)

**Status:** Open when `WORKSIM_REGISTRATION_ENDED = false`.

1. Student fills: name, course year, branch, phone, email
2. Clicks **Proceed to Payment**
3. `/api/razorpay/create-order` creates order
4. Razorpay checkout opens (cards, UPI, net banking)
5. On success, `/api/worksim-submit` verifies HMAC signature and writes to Google Sheets

**Fee:** ₹500 (configurable via `WORKSIM_REGISTRATION_FEE_INR` + `WORKSIM_REGISTRATION_AMOUNT_PAISE`).

### 3. V.I.S.T.A. (`/vista`)

**Status:** Closed when `VISTA_REGISTRATION_ENDED = true`.

Team-based idea pitching form (team name, lead, members, problem/solution, etc.) → `/api/vista-submit` → separate Google Apps Script.

---

## Design System

The site uses a **Premium Industrial** dark-first aesthetic. Full brand guidelines live in [`README_DESIGN_SYSTEM.md`](./README_DESIGN_SYSTEM.md).

### Brand

- **Positioning:** Professional Training Operating System — real-world project simulation, not a generic course marketplace
- **Slogan:** Practical Skills. Real Impact. Job Ready.
- **Voice:** Empowering, practical, trustworthy, progressive, approachable

### Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| Burnt Orange | `#E4572E` | Primary actions, accents (`orange-500`) |
| Hero Orange | `#FF6200` / `#FF6B00` | Hero gradients, feature accents |
| Muted Gold | `#C6A75E` | Secondary highlights (`gold`) |
| Charcoal | `#121212` | Main background (`bg-950`) |
| Steel Grey | `#2A2A2A` | Cards, elevated surfaces (`bg-850`) |
| Warm White | `#F4F1ED` | Primary text (`text-primary`) |

CSS variables are defined in `app/globals.css`; Tailwind tokens in `tailwind.config.ts`.

### Typography

- **Headings:** Poppins (`--font-poppins`)
- **Body / UI:** Inter (`--font-inter`)

### Key CSS component classes

Defined in `app/globals.css`:

| Class | Purpose |
|-------|---------|
| `btn-hero-primary` | Primary CTA — orange gradient, glow, hover lift |
| `btn-hero-primary-sm` | Smaller variant for cards |
| `btn-hero-secondary` | Glass outline secondary CTA |
| `btn-primary-orange` | Solid orange button |
| `btn-ghost-orange` | Outlined orange button |
| `glass-card` | Frosted glass container |
| `glass-card-warm` | Glass + subtle orange gradient overlay |
| `dark-card` | Standard dark elevated card |
| `dark-page` | Full-page dark layout with top padding |
| `dark-input` / `dark-label` | Form field styles |
| `dark-prose` | Legal/content typography |
| `text-gradient-orange` | Orange-to-gold gradient text |
| `hero-dark-grid` | Subtle orange grid background |
| `hero-visual-grid` | Hero right-panel mesh |

### Surface treatments

- **Neumorphic cards** — `FeaturesSection`, `About` (inset/outset shadows on `#0B0F14`)
- **Glassmorphism** — Header nav, CTA section (`glass-card-warm`), program cards
- **Motion** — Framer Motion on home splash, hero, programs; respects `prefers-reduced-motion`

### Border radius

- Cards: `20px` (`rounded-card`)
- Buttons: `14px` (`rounded-btn`)
- Inputs: `12px` (`rounded-input`)

---

## Home Page

**File:** `app/page.tsx`

| Order | Section | Component | Notes |
|-------|---------|-----------|-------|
| 0 | Splash | Inline in `page.tsx` | 3s logo shutter animation |
| 1 | Hero | `HeroSection` | “Train like you're already working.” + character visual |
| 2 | Features | `FeaturesSection` | Neumorphic bento grid, portfolio device images |
| 3 | Why Choose | `WhyChooseSection` | Animated chart / value props |
| 4 | Programs | `ProgramsSection` | WorkSim (Active) + past programs archive |
| 5 | CTA | `CTASection` | Glassmorphic contact/partnership CTA |

**Hero CTAs:** Join Free Demo → `/register` · Explore Programs → `/#programs`

**Available but not mounted on home:** `WhoThisIsForSection`, `FeaturedCoursesSection`, `FeaturedProgramsSection`, `HowItWorksSection` — see [`ACADEMY_PAGE_CONTENT.md`](./ACADEMY_PAGE_CONTENT.md) for archived copy.

---

## Programs & Data

**File:** `lib/programs-data.ts`

| Program | Status | Detail page | Registration |
|---------|--------|-------------|--------------|
| Ugenix WorkSim | Active | `/courses/worksim` | `/register/worksim` (Razorpay) |
| Prompt Engineering | Completed | `/courses/prompt-engineering` | `/register` (closed) |
| V.I.S.T.A. | Registrations closed | `/vista` | `/vista` (closed) |

`registrationOpen` on WorkSim is derived from `!WORKSIM_REGISTRATION_ENDED`.

**FAQ content:** `lib/faq-data.ts`

---

## Components

### Layout

- **`Header`** — Fixed glassmorphic nav; links: Programs (`/#programs`), Resources (`/faq`), About Us; mobile drawer
- **`Footer`** — Logo, resource/company/legal links, social icons
- **`MaintenanceScreen`** — Full-screen maintenance UI when `MAINTENANCE_MODE` is true

### Home sections

- **`HeroSection`** — Two-column hero; character (`character-hero@3x.png`), diagonal orange slab, glowing pills
- **`FeaturesSection`** — 5-card bento: Everything You Need, Industry Projects, Code Reviews, Team Collaboration, Career Support, Portfolio Showcase
- **`WhyChooseSection`** — SVG chart animation + value proposition
- **`ProgramsSection`** — Dashed “Up Next” container for WorkSim; past programs grid
- **`CTASection`** — Glass card with contact links

### UI

- **`hover-border-gradient`** — Animated gradient border (used in select UI patterns)

### Utilities

- **`cn()`** in `lib/utils.ts` — Merges Tailwind classes via `clsx` + `tailwind-merge`

---

## Public Assets

```
public/
├── assets/
│   ├── hero-cube-network.svg
│   ├── feature-cube.svg
│   ├── hero-mockup-reference.png
│   ├── features-portfolio-laptop.png
│   ├── features-portfolio-phone.png
│   └── about-learning.png
├── illustrations/
│   ├── CF_logo_long_horizontal_DM.svg   # Header logo (desktop)
│   ├── UAlogo_short_DM.svg              # Header logo (mobile), favicon
│   ├── UAlogo_long_horizontal_LM.svg    # Light-mode logo (maintenance)
│   ├── Ugenix Logo Long.svg
│   ├── Ugenix Logo Short.svg
│   ├── academy_logo_lightmode.svg
│   ├── character-hero@3x.png            # Hero character
│   └── character-hero@3x.svg
└── llms.txt                             # AI crawler summary (update when pages change)
```

**V.I.S.T.A. page assets:** `app/vista/src/` (college & IEDC logos).

---

## SEO & Metadata

- **Root metadata:** `app/layout.tsx` — title template, Open Graph, Twitter card, JSON-LD (`Organization` + `WebSite`)
- **Per-page metadata:** `layout.tsx` files under `about`, `courses/*`, `register/*`, `faq`, `contact`, `vista`
- **Sitemap:** `app/sitemap.ts` — auto-generated at `/sitemap.xml`
- **Robots:** `app/robots.ts` — allows crawlers; disallows `/api/`, `/admin`; includes AI bot rules
- **Canonical URL:** `NEXT_PUBLIC_SITE_URL`

---

## Maintenance Mode

Set `MAINTENANCE_MODE = true` in `lib/constants.ts`. The root layout renders `MaintenanceScreen` instead of Header/Footer/main content. Useful during deployments or major updates.

---

## Admin Dashboard

`/admin` is a **placeholder** with mock registration data and a non-functional “Export to XLSX” button. Real registrations are stored in Google Sheets via Apps Script. This route is disallowed in `robots.ts`.

---

## Deployment

Typical deployment target: **Vercel** (Analytics already integrated).

1. Set all environment variables in the hosting dashboard
2. Ensure `NEXT_PUBLIC_SITE_URL` matches production domain
3. Configure Razorpay live keys for production WorkSim payments
4. Deploy Google Apps Script endpoints for each registration type
5. Run `npm run build` locally to verify before deploy

**`next.config.js` highlights:** `reactStrictMode`, AVIF/WebP images, `poweredByHeader: false`, font optimization.

---

## Related Documentation

| File | Contents |
|------|----------|
| [`README_DESIGN_SYSTEM.md`](./README_DESIGN_SYSTEM.md) | Full brand identity, color system, typography, components, motion, logo usage |
| [`ACADEMY_PAGE_CONTENT.md`](./ACADEMY_PAGE_CONTENT.md) | Home page section copy, links, and assets archive |
| [`.env.example`](./.env.example) | Environment variable template with setup notes |

---

## Quick reference: open/close registrations

Edit `lib/constants.ts`:

```ts
export const PROMPT_ENGINEERING_ENDED = true   // /register
export const WORKSIM_REGISTRATION_ENDED = false // /register/worksim
export const VISTA_REGISTRATION_ENDED = true    // /vista
export const MAINTENANCE_MODE = false           // entire site
```

Redeploy after changes.

---

Built by **Ugenix Academy** · [academy.ugenix.in](https://academy.ugenix.in)
