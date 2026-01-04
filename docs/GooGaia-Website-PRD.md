# GooGaia Website – Product Requirements Document (PRD)

_Last updated: v1.0 – Living document_

---

## 1. Product Overview

### Product Name
**GooGaia**

### Product Type
Content + Commerce platform for modern parents

### Platforms
- Web (responsive, mobile-first)
- Future: Native iOS apps (Nurture)

### Mission Statement
GooGaia helps new and modern parents feel calmer, more informed, and more supported during early parenthood through thoughtful content, trusted tools, and meaningful products.

The experience should feel:
- Gentle
- Intelligent
- Trustworthy
- Never overwhelming

---

## 2. Target Audience

### Primary Users
- New parents (pregnancy → toddler years)
- Millennials & Gen Z (approx. 25–45)
- Tech-savvy, design-aware
- Time-limited, overwhelmed, information-fatigued

### Secondary Users
- Expecting parents researching ahead of time
- Gift buyers (friends, grandparents)

---

## 3. Core Goals

### User Goals
- Quickly find trustworthy parenting information
- Discover helpful tools without spam or clutter
- Shop for beautiful, meaningful baby/toddler products
- Feel emotionally supported, not marketed to

### Business Goals
- Build long-term brand trust
- Grow organic traffic via SEO-friendly content
- Monetize through:
  - Custom merchandise (StarBorn Tees, personalized shirts)
  - Affiliate links (apps, products)
  - Digital products (guides, ebooks, printables)
- Serve as the web hub for GooGaia apps

---

## 4. Core Sections & Requirements

---

## 4.1 Home Page

### Purpose
Brand introduction + primary navigation hub

### Goals
- Immediately communicate what GooGaia is
- Reduce anxiety, not add to it
- Funnel users to Learn, Shop, or Apps

### Requirements (MVP)
- Hero section with:
  - GooGaia logo (lowercase “g” baby icon)
  - Short, calming value proposition
- Primary CTAs:
  - Learn
  - Shop
  - Get the App (future-facing)
- Highlight sections:
  - Parenting Apps
  - Baby Essentials
  - Guides & Tips
- Newsletter signup (lightweight)
- Mobile-first layout

### Out of Scope (for now)
- Popups
- Animations that hurt performance

---

## 4.2 Learn Section

### Purpose
SEO, trust-building, long-term value

### Structure
- /learn landing page
- Category pages
- Individual article pages

### Initial Categories
- Newborn Care
- Feeding
- Sleep
- Growth & Development
- Parenting Tips

### Requirements (MVP)
- Fast load times
- Clean, readable typography
- Internal linking between articles
- Optional affiliate links (clearly disclosed)
- CMS-light or flat-file approach

### Technical Notes
- Prefer static generation where possible
- Easy manual editing

### Future Enhancements
- Search
- Featured series
- Downloadable resources

---

## 4.3 Shop

### Purpose
Primary monetization channel

### Initial Product Focus
- Personalized toddler & baby shirts
- StarBorn Tees collections

### Requirements (MVP)
- Custom storefront (not WooCommerce UI)
- Tailwind-styled product grid
- Products loaded from Printify API (server-side cached)
- Filters:
  - Size
  - Color
  - Theme
- Product detail pages inspired by Nike PDP:
  - Large imagery
  - Clear personalization controls
  - Simple, confident copy
- Stripe checkout
- Separate cart page (not drawer)

### Technical Notes
- Cache Printify data server-side (1–2x per day)
- No direct client-side Printify calls

### Out of Scope
- Subscriptions
- Reviews (initially)

---

## 4.4 Apps Section

### Purpose
Ecosystem building & cross-promotion

### Requirements (MVP)
- Dedicated Apps page
- Highlight:
  - Nurture app
- Screenshots
- Clear benefit-driven copy
- App Store links (when available)

### Future
- Deep links
- App onboarding previews

---

## 4.5 About GooGaia

### Purpose
Trust, emotional connection, brand story

### Requirements
- Founder-led origin story
- Explanation of the name GooGaia
- Brand philosophy:
  - Calm
  - Thoughtful
  - Evidence-based but human
- Minimal, warm design

---

## 4.6 Global Navigation & Header

### Requirements
- Reusable header component
- Conditional behavior:
  - Home / About / Learn → “Shop Now” CTA
  - Shop → Cart icon + Account link
- Mobile-friendly navigation
- Sticky but unobtrusive

---

## 4.7 Footer

### Requirements
- Newsletter signup
- Key links
- Social links (future-proofed)
- Privacy & Terms
- Lightweight analytics integration (Umami)

---

## 5. Design & Brand Guidelines

### Visual Style
- Soft, pastel, nature-inspired
- Minimalist
- Generous white / cream space

### Color Palette
- Primary: Warm Brown (#8B5E34)
- Secondary: Blush Pink (#F7C8D0)
- Background: Soft Cream (#FFF8F0)
- Dark Text: Deep Olive (#5A4632)
- CTA: Soft Peach (#FADCD9)

### Typography
- Friendly, rounded, modern
- High readability
- Apple-level polish

---

## 6. Technical Requirements

### Frontend
- Static-first where possible
- Tailwind CSS
- Minimal JavaScript
- Excellent Core Web Vitals

### Backend
- DreamHost-hosted utilities
- PHP or Node scripts for API handling
- Server-side caching

### Analytics
- Umami Analytics
- Privacy-focused

### SEO
- Clean URLs
- Metadata per page
- Sitemap
- Fast performance

---

## 7. Non-Functional Requirements

- Mobile-first
- Accessibility-friendly (WCAG-aware)
- Page load < 2s
- Easy solo-maintenance

---

## 8. Out of Scope (Global)

- Forums / community
- User accounts on main site
- Heavy personalization logic
- Aggressive ads

---

## 9. Success Metrics

- Organic traffic growth
- Time on page (Learn)
- Newsletter signups
- Shop conversion rate
- App installs (long-term)

---

## 10. Open Questions / Parking Lot

- Flat-file vs CMS for Learn?
- When to introduce digital products?
- How tightly to integrate apps with web?

---

## 11. Future Roadmap (High-Level)

- Digital guides & printables
- Parent tools (calculators, trackers)
- Personalized product builder
- App deep-linking
- Content partnerships

---

_End of document_
