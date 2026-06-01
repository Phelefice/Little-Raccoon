# AdSense Approval Checklist — The Little Raccoon

**Prepared:** June 1, 2026  
**Reason for resubmission:** Google AdSense reproval by "Low-value content"

---

## ✅ Improvements Made

### Tarefa 1 — Privacy Policy Page
- [x] Created `/app/privacy-policy/page.tsx`
- [x] 10 sections covering: Introduction, Data Collection, Data Use, Google AdSense, Google Analytics, Third-Party Links, Children's Privacy, GDPR Rights, Contact, Policy Changes
- [x] Contains 800+ words of real content
- [x] Link added to Footer
- [x] Commit: `feat: add privacy policy page`

### Tarefa 2 — Terms of Use Page
- [x] Created `/app/terms-of-use/page.tsx`
- [x] 10 sections: Acceptance, Content Use, Intellectual Property, User Conduct, Disclaimer, Liability, External Links, Modifications, Governing Law, Contact
- [x] Contains 600+ words of real content
- [x] Link added to Footer
- [x] Commit: `feat: add terms of use page`

### Tarefa 3 — Contact Page
- [x] Created `/app/contact/page.tsx`
- [x] Email contact (`hello@thelittleraccoon.com`)
- [x] FAQ section with 4 questions and answers
- [x] Social media links
- [x] Link added to Footer
- [x] Commit: `feat: add contact page`

### Tarefa 4 — Article Expansion
- [x] `redstone-basics-beginners.mdx` — expanded from 117 to ~1,100 words
- [x] `complete-enchanting-guide.mdx` — expanded from 119 to ~1,100 words
- [x] `how-to-survive-first-night.mdx` — expanded from 119 to ~1,200 words
- [x] `mob-farming-101.mdx` — expanded from 122 to ~1,100 words
- [x] `villager-trading-hall-guide.mdx` — expanded from 122 to ~1,200 words
- [x] `how-to-find-diamonds.mdx` — expanded from 134 to ~1,100 words
- [x] `how-to-build-an-iron-farm.mdx` — expanded from 139 to ~1,100 words
- [x] `best-survival-seeds-1-21.mdx` — expanded from 146 to ~1,200 words
- [x] Every expanded article includes: detailed introduction, multiple H2 sections, practical tips lists, Pro Tips section, FAQ with 3 questions, CTA linking to related articles
- [x] Commit: `content: expand articles for AdSense quality requirements`

### Tarefa 5 — GDPR Cookie Banner
- [x] Created `/components/CookieBanner.tsx`
- [x] Banner shown on first visit
- [x] "Accept All" button saves consent to localStorage and hides banner
- [x] "Manage Preferences" opens modal with granular Analytics and Advertising toggles
- [x] Dark theme matching site design
- [x] Link to `/privacy-policy`
- [x] Added to `/app/layout.tsx`
- [x] Commit: `feat: add GDPR cookie consent banner`

### Tarefa 6 — About Page Improvement
- [x] Expanded `/app/about/page.tsx` from ~50 words to 400+ words
- [x] Sections: About, Mission, Who We Are, What We Cover (6 categories), Contact CTA
- [x] Footer component added for consistent layout
- [x] Commit: `content: improve about page for AdSense requirements`

---

## Google AdSense Requirements Checklist

### Content Quality
- [x] All articles are 800+ words with original, useful content
- [x] No duplicate or thin content
- [x] Articles have clear H2 structure, practical tips, and conclusions
- [x] Content is specifically about Minecraft (clear niche)

### Site Policies & Legal Pages
- [x] Privacy Policy page — `/privacy-policy`
- [x] Terms of Use page — `/terms-of-use`
- [x] Contact page — `/contact`
- [x] About page — `/about`
- [x] All legal pages linked in the Footer

### GDPR & Cookie Compliance
- [x] Cookie consent banner present on all pages
- [x] Users can accept all or manage preferences
- [x] Privacy Policy explains Google AdSense and Analytics cookie usage
- [x] Users can opt out of advertising cookies

### Technical
- [x] AdSense account meta tag present in `layout.tsx`: `ca-pub-5219702409402620`
- [x] AdSense script loaded
- [x] Site is functional and navigable
- [x] All pages return 200 (no broken routes)

---

## How to Request AdSense Review

1. Log into your Google AdSense account at **adsense.google.com**
2. Go to **Account → Policy center** (or click the warning notification)
3. Find the "Low-value content" violation
4. Review the affected pages listed
5. Click **"I've fixed the issue"** or **"Request review"**
6. Check the box confirming **"I confirm I have fixed the issues"**
7. Click **"Request review"**

Google typically responds within **1–2 weeks**. During this period, avoid making further major changes to the site.

---

## Notes

- The git lock file workaround (`cp .git/index /tmp/git_idx_X && GIT_INDEX_FILE=...`) was needed due to a Windows filesystem mount issue that prevented deleting `.git/HEAD.lock` and `.git/index.lock`. All commits are valid and in the correct order.
- All commits are local — a `git push` to origin is required to deploy.
