# Wedding Invitation Website

მოსაწვევი საიტი ქორწილისთვის. Mobile-first, animation-heavy, frontend-only.

## Stack

- **Astro 5** — zero-JS static output, island hydration
- **Tailwind CSS** — utility-first styling
- **GSAP + ScrollTrigger** — scroll-linked animations
- **Lenis** — smooth scroll (disabled on low-tier devices)
- **Fontsource** — self-hosted Noto Serif/Sans Georgian + DM Serif Display
- **TypeScript** — strict mode

## Commands

```bash
npm install        # ერთხელ
npm run dev        # http://localhost:4321
npm run build      # dist/ production build
npm run preview    # preview build locally
```

## Structure

```
src/
├── layouts/BaseLayout.astro      # meta, fonts, sprite, tier detection
├── pages/index.astro             # main page (imports all sections)
├── lib/
│   ├── site-config.ts            # ALL content lives here — edit this
│   └── animations.ts             # GSAP setup + scroll reveals + countdown
├── styles/globals.css            # design tokens, typography, base styles
└── components/
    ├── Icon.astro                # <Icon name="..." size={18} />
    ├── IconSprite.astro          # SVG sprite (edit to add icons)
    ├── Nav.astro
    ├── Ornament.astro
    └── sections/
        ├── Hero.astro
        ├── Countdown.astro
        ├── Story.astro
        ├── Details.astro
        ├── Schedule.astro
        ├── Gallery.astro
        ├── DressCode.astro
        ├── RSVP.astro
        ├── FAQ.astro
        └── Footer.astro
```

## ყველა ტექსტი და მონაცემი

ყველა content (სახელები, თარიღი, მისამართი, კონტაქტი) ერთ ადგილზე:
👉 **`src/lib/site-config.ts`** — შეცვალე აქ.

## ფონტების შეცვლა

1. დააინსტალირე ახალი Fontsource package: `npm i @fontsource/your-font`
2. `src/styles/globals.css`-ში ჩანაცვლე `@import` სტრიქონები
3. `tailwind.config.mjs`-ში `fontFamily.display/latin/sans` სტეკიც განაახლე

## ფერებისა და ტიპოგრაფიის შეცვლა

`src/styles/globals.css` — `:root` ბლოკი. CSS custom properties:

- `--bg` — ძირითადი ფონი (warm cream)
- `--paper` — სექცია-to-სექცია გადართვისთვის
- `--ink` — ტექსტი
- `--primary` — აქცენტი (ღვინისფერი)
- `--accent` — მეორადი აქცენტი (ოქრო)
- `--sage` — mint/botanical ელემენტები

## გალერეის სურათების დამატება

`src/components/sections/Gallery.astro`-ს `tiles` მასივი გაანახლე. ამჟამად SVG placeholder-ებია — მერე ჩანაცვლე `<img>`-ებით (Astro `<Image>` კომპონენტი AVIF/WebP-სთვის გირჩევთ).

## RSVP Google Forms

`src/lib/site-config.ts` → `rsvp.url` — ჩასვი შენი Google Forms public link.

## Performance

Build output:
- HTML: ~72 KB (sprite inlined)
- CSS: ~59 KB (design tokens + all sections)
- JS: ~52 KB gzipped (GSAP + ScrollTrigger + Lenis + init code)
- Fonts: ქართული subset ~10-17 KB თითო weight-ზე

Device tiers (auto-detected in `<head>`):
- `high` — სრული ანიმაციები + Lenis smooth scroll
- `mid` — სრული ანიმაციები Lenis-ის გარეშე
- `low` — მოკლე ანიმაციები, არა smooth scroll
- `reduced` — `prefers-reduced-motion: reduce` → instant state

## Deployment

Vercel / Netlify / Cloudflare Pages:
1. Connect repo
2. Build command: `npm run build`
3. Output directory: `dist`
