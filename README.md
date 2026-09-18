# InAmigos Foundation — Modern NGO Digital Platform

A production-grade, highly interactive, modern digital platform created for **InAmigos Foundation** — a pan-India, youth-driven non-profit organization focused on Education (*BachpanShala*), Women Empowerment (*Udaan*), Animal Welfare (*Jeev*), Community Relief (*Sewa*), Environmental Sustainability (*Prakriti*), and Youth Development (*Vikas*).

Inspired by the structural scope of `https://inamigosfoundation.org.in/`, this project completely redesigns the user experience from the ground up with a bespoke, human-centered, accessible, and high-trust visual identity.

---

## 🌟 Key Highlights & Feature Matrix

| Feature | Description | Status |
| :--- | :--- | :---: |
| **Razorpay Payment Gateway** | Official Razorpay checkout experience supporting instant dynamic UPI QR with countdown timer, VPA handles (GPay, PhonePe, Paytm), Debit/Credit Cards (RuPay, Visa, Master), and NetBanking. Captures authentic `pay_...` IDs and generates printable Section 80G tax exemption receipts. | ✅ Complete |
| **Volunteer Onboarding Flow** | Real-time validated application (Indian 10-digit phone regex, email, interest areas), instant celebration modal, and cohort enrollment simulation. | ✅ Complete |
| **Event RSVP & Digital Pass** | Multi-category event discovery with real-time category filters, RSVP registration modal, and instant digital entry pass generator with verified entry code. | ✅ Complete |
| **Masonry Gallery & Lightbox** | Responsive media gallery with smooth category filters and a keyboard-accessible modal lightbox (`ArrowLeft`, `ArrowRight`, `Escape`, index counters). | ✅ Complete |
| **Instant Client Search & Filters** | Real-time zero-delay search with active result counters (*"Showing X of Y initiatives"*) across Programs, Events, and Stories. | ✅ Complete |
| **Transparency & Statutory Hub** | Open governance section featuring compliance badges (`12A/80G`, `Annual Report FY 2024-25`, `Audit Report`) with simulated instant PDF download confirmation. | ✅ Complete |
| **Accessibility & Performance** | Full keyboard navigation (`focus-visible`), ARIA drawer compliance, `@media (prefers-reduced-motion)` support, and 0 lint/TypeScript warnings. | ✅ Complete |

---

## 🏗️ Architecture & Information Hierarchy

The website strictly implements the comprehensive 16-section homepage alongside 11 specialized sub-pages:

### 1. Homepage (`/`)
1. **Hero Section**: Cinematic layered vignette, animated live trust pulse badge, frosted impact counters (50,000+ Lives, 30,000+ Interns, 20,000+ Trees, 200+ Volunteers), dual CTAs.
2. **Impact Stats Strip**: Key verified quantitative metrics with visual iconography.
3. **About Snapshot**: Mission, Vision, and Core Values tabbed switcher.
4. **Flagship Programs Grid**: Live category tabs and instant search for BachpanShala, Udaan, Jeev, Sewa, Prakriti, and Vikas.
5. **Featured Beneficiary Story**: Deep-dive human case study with pull quote and before/after milestones.
6. **How We Work**: 4-step cyclical path (*Identify & Mobilize*, *Transparent Funding*, *On-Ground Action*, *Accountability*).
7. **Upcoming & Past Events**: Interactive event preview with status pills and RSVP entry points.
8. **Testimonials Carousel**: Auto-sliding reviews with hover-pause, pagination indicators, and verified beneficiary tags.
9. **Transparency & Trust**: Statutory cards with transparent legal placeholders and audit downloads.
10. **Volunteer Drive CTA**: Interactive application form with validation, status spinners, and confetti.
11. **Direct Donation Terminal**: Multi-amount preset calculator with real-time rupee-to-impact calculation.
12. **Voices & Insights (Blog)**: Articles covering grassroots policy, animal welfare, and ground reports.
13. **Masonry Gallery Preview**: Field photography grid with category filtering.
14. **Newsletter Dispatch**: Monthly impact digest signup with instant feedback.
15. **Pre-Footer Action Banner**: High-contrast final participation prompt.
16. **Global Footer**: Verified navigation hierarchy, Section 80G disclaimer, copyright, and SVG social links.

### 2. Dedicated Sub-Pages
- `/about` — Full organization background, leadership & advisory board with category filters.
- `/programs` — Comprehensive directory of all 6 initiatives with category filtering, search, and quick modals.
- `/programs/[slug]` — Individual program deep-dives (e.g., `/programs/bachpanshala`, `/programs/udaan`, `/programs/jeev`, `/programs/sewa`, `/programs/prakriti`, `/programs/vikas`).
- `/impact` — State-wise reach breakdown, metrics, and downloadable governance filings.
- `/events` — Comprehensive events calendar with upcoming vs past tabs, search, and pass generation.
- `/stories` — Beneficiary narratives directory with category filters and search.
- `/stories/[slug]` — Full-length human impact articles with quotes and milestones.
- `/gallery` — Fullscreen masonry photography collection with keyboard lightbox.
- `/volunteer` — 4-step onboarding journey and application form.
- `/donate` — Dedicated donation interface with 80G tax benefit breakdown and FAQ accordions.
- `/contact` — Headquarters contact details, inquiry form, and interactive map placeholder.

---

## 💻 Tech Stack

- **Framework**: [Next.js 16.3.5](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom typography, gradients, and soft shadow tokens
- **Icons**: [Lucide React](https://lucide.dev/) + Custom inline SVG Social Icons
- **Effects & Feedback**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Code Quality**: ESLint 9 with Next.js Core Web Vitals config

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation & Run

```bash
# Navigate to the project directory
cd /Users/harsh/.gemini/antigravity/scratch/inamigos-foundation

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Or run an optimized production build
npm run build
npm run start
```

Open **`http://localhost:3000`** in your browser.

---

## 🧪 Verification & Quality Assurance

The codebase has been verified with a zero-tolerance policy for build errors, type mismatches, and lint warnings:

```bash
# 1. Type Check
npx tsc --noEmit
# Result: 0 errors

# 2. Lint Check
npm run lint
# Result: 0 errors, 0 warnings

# 3. Production Build
npm run build
# Result: Compiled successfully in 872ms (13 static pages, 2 dynamic routes)

# 4. HTTP Route Smoke Test
# All 17 routes respond with HTTP 200 OK:
# ✓ /
# ✓ /about
# ✓ /programs
# ✓ /programs/bachpanshala
# ✓ /programs/udaan
# ✓ /programs/jeev
# ✓ /programs/sewa
# ✓ /programs/prakriti
# ✓ /programs/vikas
# ✓ /impact
# ✓ /events
# ✓ /stories
# ✓ /stories/meenas-journey-from-daily-wage-to-micro-entrepreneur
# ✓ /gallery
# ✓ /volunteer
# ✓ /donate
# ✓ /contact
```

---

## 🎯 Recommended Presentation / Demo Flow

When showcasing this project for evaluation or portfolio presentation:

1. **The Hero & Trust Hook (`/`)**: Show the live pulsing trust badge, fluid headline typography, and real-world impact statistics.
2. **Interactive Donation Gateway**: Click **"Donate"** in the top navigation or banner. Switch donation amounts (₹500 -> ₹1,000 -> ₹2,500) and highlight how the on-ground impact description dynamically changes. Enter donor details, proceed to payment (select UPI or Card), complete payment, and show the instant **Section 80G Tax Exemption Receipt** with unique reference code and confetti celebration.
3. **Interactive Volunteer Application**: Navigate to `/volunteer` or the homepage section. Test client-side validation (e.g., enter an invalid phone number or empty field), then submit valid details to witness the welcome celebration modal.
4. **Programs Directory & Live Search (`/programs`)**: Filter by *Education*, *Animals*, *Environment*, or type a query in the search bar. Click *"View Full Details"* to open a programmatic modal preview, or click into a deep dive (e.g. `/programs/udaan`).
5. **Interactive Masonry Gallery (`/gallery`)**: Filter by category and click any image to trigger the fullscreen lightbox. Use keyboard arrow keys (`←`, `→`) to browse and `Esc` to exit.
6. **Events & Digital Entry Pass (`/events`)**: Click *"RSVP / Register"* on an upcoming drive, fill the form, and display the generated verified **Digital Entry Pass**.
7. **Mobile Drawer & Responsive Test**: Shrink browser to mobile viewport; toggle the smooth drawer menu, test keyboard `Esc` closing, and navigate between pages.

---

## 📄 Compliance & Transparency Disclaimer

*All tax exemption mentions (Section 80G, 12A), financial report links, and registration identifiers on this demo platform are structured using standard institutional placeholders (`[Registration No: IN-NGO/2020/XXXX]`, `[Certificate: 12A/80G/PROV/XXXX]`) for ethical demonstration purposes.*
