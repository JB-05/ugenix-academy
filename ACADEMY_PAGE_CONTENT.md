# Academy Page — Section Content Reference

This file preserves all copy, links, and assets from the current academy home page (`app/page.tsx`) before the redesign. Use it to reorder sections or rebuild components without losing content.

**Source page:** `app/page.tsx`

---

## Current section order

| # | Section ID        | Component file                              | On page? |
|---|-------------------|---------------------------------------------|----------|
| 0 | — (splash)        | `app/page.tsx` (inline)                     | Yes      |
| 1 | —                 | `components/sections/HeroSection.tsx`         | Yes      |
| 2 | —                 | `components/sections/WhoThisIsForSection.tsx` | Yes      |
| 3 | `why-choose`      | `components/WhyChooseSection.tsx`           | Yes      |
| 4 | `courses`         | `components/sections/FeaturedCoursesSection.tsx` | Yes   |
| 5 | —                 | `components/sections/FeaturedProgramsSection.tsx` | Yes   |
| 6 | —                 | `components/sections/CTASection.tsx`        | Yes      |
| — | `how-it-works`    | `components/sections/HowItWorksSection.tsx`   | **No** (exists but not imported) |

---

## 0. Splash screen

**Location:** `app/page.tsx` (inline, not a separate section component)

**Duration:** 3 seconds, then slides up

**Content:**
- **Logo image:** `/illustrations/academy_logo_lightmode.svg`
- **Logo alt text:** Ugenix Academy

---

## 1. Hero

**Component:** `components/sections/HeroSection.tsx`  
**Section ID:** none  
**Scroll target:** `#why-choose` (scroll-down button)

### Headline
- Line 1: Unlock your tech career
- Line 2 (accent): with practical AI skills

### Subheadline
Build job-ready, portfolio-backed skills with industry practitioners who teach from real projects, not just theory.

### Primary CTA
- **Label:** Explore Courses
- **Link:** `/courses/prompt-engineering`

### Secondary CTA
- **Label:** Learn About the Academy
- **Link:** `/about`

### Supporting line
Next cohort starts soon. No prior experience required.

### Visual / badge
- **Image:** `/illustrations/heor.svg`
- **Image alt:** Learner exploring AI skills
- **Floating tag:** Live, cohort-based learning

### Scroll control
- **Label:** Explore (with down-arrow icon)
- **Action:** Smooth scroll to `#why-choose`

---

## 2. Who This Is For

**Component:** `components/sections/WhoThisIsForSection.tsx`  
**Section ID:** none

### Heading
Who This Is For

### Illustration
- **Image:** `/illustrations/wh-choose.svg`
- **Alt:** (decorative, empty)

### Accordion items

#### Just starting out?
Begin with clear guidance and structured learning paths designed for those new to the field.

#### Still studying?
Complement your studies with practical skills that bridge the gap between academic learning and real-world industry needs.

#### Already working?
Stay relevant in a changing field by learning modern approaches and tools that strengthen your current role.

#### Always curious?
Deepen your understanding and explore advanced concepts through courses built for dedicated learners.

**Default open item:** Just starting out?

---

## 3. Why Choose This Academy

**Component:** `components/WhyChooseSection.tsx`  
**Section ID:** `why-choose`

### Heading
Why Choose This Academy

### Cards (bento grid)

#### Industry-Experienced Instructors
Our instructors are active practitioners who work with these technologies daily. They bring real-world context and current best practices, not just theoretical knowledge from outdated materials.

#### Practical, Outcome-Oriented Learning
Every course is designed around what you'll actually do with these skills. We focus on application over theory, ensuring you can use what you learn immediately in your work or projects.

#### Structured Learning Path
Each course follows a clear progression from fundamentals to advanced concepts. You'll build understanding step-by-step with guided instruction and practical exercises that reinforce what you learn.

#### Built by a Real Technology Company
This academy is an initiative by [ugenix.in](https://ugenix.in), a technology company that builds real products and solves real problems. Our training reflects the same standards and practices we use in our own work.

---

## 4. Featured Courses

**Component:** `components/sections/FeaturedCoursesSection.tsx`  
**Section ID:** `courses`

### Featured Courses (empty state)

**Heading:** Featured Courses

**Empty state message:** More sessions coming soon…

### Past Courses

**Heading:** Past Courses

#### Prompt Engineering
- **Description:** Learn to communicate effectively with AI systems and craft prompts that produce reliable, useful results.
- **Link:** `/courses/prompt-engineering`
- **CTA label:** View Course

---

## 5. Featured Programs

**Component:** `components/sections/FeaturedProgramsSection.tsx`  
**Section ID:** none

### Eyebrow
Beyond Courses

### Heading
Featured Programs

### Intro
Cohort-based experiences, events, and initiatives we run with partners and student communities.

### Upcoming (empty state)
We regularly run programs with campus clubs and communities. New programs will appear here as they go live.

### Past Programs

**Subheading:** Past Programs

#### V.I.S.T.A. Idea Pitching Competition
- **Status label:** Completed
- **Registration badge:** Registrations closed
- **Description:** Visionary Initiative for Student-Led Transformation And Action — an idea pitching competition hosted by E.D Club with Ugenix Academy & IEDC CEK.
- **Footer note:** Team-based, on-campus program.

---

## 6. CTA (call to action)

**Component:** `components/sections/CTASection.tsx`  
**Section ID:** none

### Heading
Start building skills that actually matter

### Body
Join a learning experience designed for clarity and practical application.

### CTA
- **Label:** Start Your Learning Journey
- **Link:** `#courses`

### Illustration
- **Image:** `/illustrations/cta.svg`
- **Alt:** (decorative, empty)

---

## 7. How It Works *(not currently on page)*

**Component:** `components/sections/HowItWorksSection.tsx`  
**Section ID:** `how-it-works`  
**Status:** Component exists but is **not** imported in `app/page.tsx`

### Heading
How It Works

### Steps

#### 01 — Explore the Course
Review course details, learning outcomes, and structure to ensure it aligns with your goals.

#### 02 — Learn Online
Access structured content, videos, and resources through our online platform at your own pace.

#### 03 — Participate Offline
Join optional in-person sessions for hands-on practice, group work, and direct instructor guidance.

#### 04 — Apply Skills
Complete real-world projects and scenarios that demonstrate your mastery and build your portfolio.

---

## Shared assets

| Asset path | Used in |
|------------|---------|
| `/illustrations/academy_logo_lightmode.svg` | Splash, header |
| `/illustrations/heor.svg` | Hero |
| `/illustrations/wh-choose.svg` | Who This Is For |
| `/illustrations/cta.svg` | CTA |

---

## Internal links summary

| Label | URL |
|-------|-----|
| Explore Courses | `/courses/prompt-engineering` |
| Learn About the Academy | `/about` |
| View Course (Prompt Engineering) | `/courses/prompt-engineering` |
| Start Your Learning Journey | `#courses` |
| ugenix.in | `https://ugenix.in` |

---

## Suggested reorder workflow

1. Edit the **Current section order** table above to your target order.
2. Rebuild section components using the content blocks in this file.
3. Update `app/page.tsx` imports and section order to match.
4. Keep section IDs (`why-choose`, `courses`, `how-it-works`) if header/footer anchor links should keep working.
