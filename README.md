# TeaMilk Website

A Vietnamese-language TeaMilk website built with Next.js App Router, React, and TypeScript. It is a study/demo project; account, cart, checkout, and contact interactions are local demonstrations and are not connected to a production service.

## Requirements

- Node.js compatible with the installed Next.js version
- npm

## Run locally

```bash
cd Website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `npm run build`, then `npm run start`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Check TypeScript types without emitting files |
| `npm run lint` | Run ESLint on the application and its config |
| `npm run build` | Build the production application |
| `npm run start` | Serve the production build |

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage and menu preview |
| `/menu` | Product catalog with category navigation |
| `/info` | TeaMilk information page |
| `/news` | News page with an empty state |
| `/contact` | Demo contact form |
| `/login` | Demo sign-in form |
| `/register` | Demo registration form |
| `/account` | Demo account summary |
| `/orders` | Order-history empty state |
| `/checkout` | Demo checkout form |

## Project structure

```text
Website/
├── public/img/          # Static image assets
├── src/app/             # App Router pages and root layout
├── src/components/      # Page and shared UI components
├── src/data/            # Local reference product catalog
├── src/lib/             # Demo utilities, including authentication
└── src/styles/          # Global and component styles
```

The root layout provides the shared header, footer, and in-memory cart context. Interactive components use client-side React state. Product records in `src/data/legacy-products.ts` are reference data copied from the legacy menu; their prices and image branding are not verified as current TeaMilk business information. Authentication uses browser storage for demo behavior. There is no production backend or persistent order/checkout service.

## Notes

- Images are served from `public/img/` and referenced with paths beginning `/img/`.
- Some retained images or reference catalog entries may have unclear or third-party branding. Review assets and business data before presenting this project as an official commercial site.
- Shared project guidance is in `.ai/PROJECT_CONTEXT.md` and `.ai/rules/`.
