# mettle.coach

Athlete mental performance coaching platform — Next.js 14 + Tailwind CSS, auto-deployed via Vercel.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Analytics:** Vercel Analytics + PostHog
- **Payments:** Stripe (Performance Readiness Map + subscriptions)
- **Email:** Kit (ConvertKit)
- **Deployment:** Vercel (auto-deploy on push to `main`)

## Getting Started

```bash
npm install
cp .env.example .env.local
# fill in your env vars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` → Vercel auto-deploys. Pull requests get preview URLs automatically.

## Env Variables

See `.env.example` for all required variables.
