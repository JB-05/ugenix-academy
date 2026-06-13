# Ugenix Academy Design System

## Overview

Ugenix Academy is not a university website, course marketplace, or bootcamp landing page.

The brand should feel like a:

**Professional Training Operating System**

with a **Premium Industrial** aesthetic — dark, focused, and built for real-world readiness.

**Slogan:** Practical Skills. Real Impact. Job Ready.

**Brand Mission:** Empowering learners with practical skills and real-world exposure.

**Core Values:**

* Practical
* Career Focused
* Impact Driven
* Inclusive

**Brand Voice:** Empowering, Practical, Trustworthy, Progressive, Approachable.

Core positioning verbs:

* Build
* Simulate
* Ship
* Learn
* Execute
* Mentor
* Get Hired

Every UI component, layout, illustration, and interaction should reinforce real-world work simulation and professional readiness.

---

# Brand Identity

## Logo

The primary logo combines a stylized **"U" mark** with the wordmark:

* **Mark:** A thick, rounded burnt-orange stroke on the left paired with a slanted warm-white bar on the right.
* **Wordmark:** **Ugenix** in bold warm white; **Academy** in smaller, spaced-out burnt orange below or beside it.

### Logo Assets

```text
CF_logo_long_horizontal_DM.svg   — Primary horizontal logo (dark backgrounds)
UAlogo_short_DM.svg              — Short mark only (dark backgrounds)
UAlogo_long_horizontal_LM.svg    — Horizontal logo (light backgrounds)
academy_logo_lightmode.svg       — Full logo (light backgrounds)
```

### Logo Usage

* **Minimum size:** 20 mm print / 75 px digital
* **Clear space:** Equal to the height of the **U** in the mark on all sides
* **Preferred formats:** `.SVG` for vectors, `.PNG` for transparent web use
* **Color modes:** RGB for digital, CMYK for print

### Do's

* Maintain clear space around the logo
* Use approved brand colors only
* Use approved typography with the wordmark
* Use high-quality, on-brand photography

### Don'ts

* Do not stretch, skew, or distort the logo
* Do not use unapproved colors on the mark or wordmark
* Do not add drop shadows, glows, or effects to the logo
* Do not change logo typography
* Do not overcrowd layouts around the logo

---

# Design Principles

## 1. Real Work First

The experience should feel like a professional product platform rather than an educational portal.

Avoid:

* Academic styling
* Campus aesthetics
* Cartoon education visuals
* Excessive decorative gradients

Prefer:

* Product UI aesthetics
* SaaS visual language
* Technical interfaces
* Professional workflows

---

## 2. Dark-First Design

Primary experience is dark mode on charcoal and steel-grey surfaces.

The interface should feel:

* Premium
* Industrial
* Modern
* Focused

Avoid bright, washed-out backgrounds.

---

## 3. Burnt Orange as Action

Burnt Orange is the primary accent color.

Use it to communicate:

* Action
* Progress
* Achievement
* Attention

Muted Gold supports secondary emphasis, tags, and premium highlights.

Never use Burnt Orange as a full-page background. Use it selectively.

---

# Foundations

## Color System — Option 2 (Premium Industrial)

### Primary Palette

```css
--burnt-orange: #E4572E;   /* Primary actions, accents, logo mark */
--muted-gold:   #C6A75E;   /* Secondary accents, tags, highlights */
--charcoal:     #121212;   /* Main background */
--steel-grey:   #2A2A2A;   /* Secondary background, containers */
--warm-white:   #F4F1ED;   /* Primary text on dark surfaces */
```

### Brand Gradient

```css
background: linear-gradient(135deg, #E4572E 0%, #C6A75E 100%);
```

Use sparingly for premium highlights, badges, and hero accents — not as a default page background.

### Neutral Scale

```css
--neutral-900: #1F1F1F;
--neutral-800: #333333;
--neutral-700: #4D4D4D;
--neutral-400: #BDBDBD;
--neutral-100: #E6E3DF;
```

### Semantic Tokens

```css
/* Backgrounds */
--bg-primary:   var(--charcoal);
--bg-secondary: var(--steel-grey);
--bg-elevated:  var(--neutral-900);

/* Text */
--text-primary:   var(--warm-white);
--text-secondary: var(--neutral-400);
--text-muted:     var(--neutral-700);

/* Borders */
--border-primary: var(--neutral-800);
--border-hover:   var(--neutral-700);

/* Accents */
--accent-primary:   var(--burnt-orange);
--accent-secondary: var(--muted-gold);
```

---

# Typography

## Primary Font — Poppins

Geometric sans-serif used for headings, subheadings, and primary marketing copy.

```css
font-family: "Poppins", sans-serif;
```

## Complementary Fonts

| Font | Role |
|------|------|
| **Satoshi** | Posters, headlines, technical displays |
| **General Sans** | Subheadings, body text, layouts |
| **Inter** | Primary UI / system font for digital interfaces and small text |
| **Playfair Display** | Special highlights, quotes, premium accents |

## Type Scale (Desktop)

```text
Heading 1    48px / Bold
Heading 2    32px / SemiBold
Heading 3    24px / Medium
Subheading   18px / SemiBold
Body Text    16px / Regular
Caption      12px / Regular
```

## Extended Scale (Marketing / Hero)

```text
Display XL   72px
Display L    60px
H4           24px
Body Large   18px
Body Small   14px
```

---

# Layout System

## Container

```css
max-width: 1280px;
margin: auto;
padding-inline: 24px;
```

---

## Grid

```text
12 Column Layout
24px Gutters
```

---

## Breakpoints

```css
Mobile:  0px
Tablet:  768px
Laptop:  1024px
Desktop: 1440px
```

---

# Radius System

## Cards

```css
border-radius: 20px;
```

## Buttons

```css
border-radius: 14px;
```

## Inputs

```css
border-radius: 12px;
```

## Pills & Tags

```css
border-radius: 999px;
```

---

# Shadow & Glow System

## Accent Glow

```css
box-shadow:
  0 0 20px rgba(228, 87, 46, 0.15),
  0 0 40px rgba(228, 87, 46, 0.10);
```

Use sparingly. Never glow entire cards.

Appropriate uses:

* Primary buttons on hover
* Cube / wireframe highlights
* Active states
* Important indicators

---

# Visual Language

## Cube System

The isometric wireframe cube remains a primary visual identity element.

### Hero Cube

Purpose:

* Large background illustration
* Hero visual anchor

Characteristics:

* Isometric wireframe
* Burnt Orange stroke
* Subtle glow
* Technical, industrial appearance

Asset:

```text
hero-cube-network.svg
```

---

### Feature Cube

Purpose:

* Feature sections
* Supporting illustrations

Characteristics:

* Medium complexity
* Center glow

Asset:

```text
feature-cube.svg
```

---

### CTA Cube

Purpose:

* Decorative support element

Characteristics:

* Smaller scale
* Simpler geometry

Asset:

```text
cta-cube.svg
```

---

## Character System

One consistent character identity should be used across the platform.

Visual traits:

* Black techwear jacket
* Burnt Orange accents
* Professional appearance
* Laptop-focused pose
* Product-builder persona

Variants:

```text
Standing with laptop
Crossed arms
Half body
```

Primary asset:

```text
hero-character.webp
```

---

## Iconography

Style:

* Outlined icons
* 2px stroke
* Rounded caps and corners
* Brand accent colors only (Burnt Orange, Muted Gold, Warm White)

Examples:

```text
Projects
WorkSim
Labs
Placement
Mentorship
Growth
```

---

## Shapes & Patterns

Use for background depth and section texture:

* Rounded rectangles
* Circles and thick outlines
* Dotted grids
* Diagonal line patterns
* Crosshatching
* Concentric circles
* Simple arrows and dashed accent lines

---

# Photography Style

**Theme:** Real people. Real learning. Real environments.

Guidelines:

* High-contrast, candid photography
* Students collaborating in workshops or using technology
* Focus on concentration, collaboration, and growth
* Avoid staged stock-photo aesthetics
* Prefer laptops, electronics, and hands-on learning environments

---

# Components

## Buttons

### Primary

Solid Burnt Orange background, Warm White text, rounded corners, optional right arrow.

```css
background: var(--burnt-orange);
color: var(--warm-white);
border-radius: 14px;
```

Hover:

```css
transform: translateY(-2px);
```

---

### Secondary

Burnt Orange outline and text, transparent background, rounded corners, optional right arrow.

```css
background: transparent;
border: 1px solid var(--burnt-orange);
color: var(--burnt-orange);
```

---

### Outline

Grey outline, Warm White text, transparent background.

```css
background: transparent;
border: 1px solid var(--neutral-700);
color: var(--warm-white);
```

---

## Badge

Solid Burnt Orange background, Warm White text.

```text
Example: Popular
```

---

## Tag

Solid Muted Gold background, Warm White text.

```text
Example: Best Seller
```

---

## Input Field

```css
background: var(--steel-grey);
border: 1px solid var(--neutral-700);
border-radius: 12px;
color: var(--warm-white);
```

Focus:

```css
border-color: var(--burnt-orange);
```

---

# Navigation

Structure:

```text
Logo (CF_logo_long_horizontal_DM.svg)
Programs
WorkSim
Success Stories
Resources
About
CTA Button
```

Sticky on scroll.

---

# Cards

## Program Card

Structure:

```text
Icon
Title
Description
CTA or Status (e.g. Coming Soon)
```

Used for:

```text
Ugenix Core
Ugenix Pro
Ugenix WorkSim
Ugenix Labs
Ugenix Placement
```

Highlighted card (e.g. WorkSim): orange border, "Most Popular" badge.

---

## Feature Card

Structure:

```text
Icon
Title
Description
Arrow
```

---

# Forms

Style:

```css
background: var(--steel-grey);
border: 1px solid var(--border-primary);
```

Focus:

```css
border-color: var(--burnt-orange);
```

---

# Motion System

## Timing

```css
Fast:   200ms
Normal: 300ms
Slow:   500ms
```

---

## Hover

Cards:

```css
transform: translateY(-4px);
```

Buttons:

```css
transform: translateY(-2px);
```

---

## Glow Animation

```css
opacity: 0.7 → 1;
```

Respect `prefers-reduced-motion` for all animations.

---

# Homepage Structure

```text
Hero
Features
Programs
Impact / Why Choose
CTA
Footer
```

---

# Hero Section

Layout:

```text
Left 45%  — Copy, CTAs, trust logos
Center    — Hero character
Right     — Stat / info cards
```

Content:

```text
Eyebrow tagline
Headline (accent word in Burnt Orange)
Description
Primary CTA
Secondary CTA
Trust Logos
```

Visuals:

```text
Hero Character
Hero Cube Network
Grid Background
```

---

# Features Section

Layout:

```text
Bento Grid
```

Cards:

```text
Everything You Need
Industry Projects
Expert Code Reviews
Team Collaboration
Career Support
Portfolio Showcase
```

---

# Programs Section

Header:

```text
OUR PROGRAMS (eyebrow)
Choose your path. Build your future.
View all programs →
```

Program cards or Coming Soon placeholder.

Past Programs archive below main grid.

---

# FAQ Section

Accordion layout.

Each item:

```text
Question
Answer
Expand Icon
```

---

# Contact Section

Two-column layout.

Left:

```text
Contact Information
```

Right:

```text
Form
```

---

# Development Notes

Build using:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

Architecture:

```text
components/
sections/
layouts/
icons/
assets/
public/illustrations/
```

All sections should be reusable, responsive, and component-driven.

Avoid page-specific styling whenever possible.

Build the system first, then assemble pages from the system.

Map design tokens to Tailwind and CSS variables in `tailwind.config.ts` and `globals.css` as the single source of truth for implementation.
