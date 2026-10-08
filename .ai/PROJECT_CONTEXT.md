# TeaMilk Project Context

## Purpose

TeaMilk is a beverage shop website being migrated from
HTML/CSS/JavaScript to Next.js.

## Current stack

- Next.js
- React
- TypeScript
- [styling solution]

## Architecture

src/
├── app/
├── components/
├── data/
├── lib/
└── styles/

## Routes

/
/info
/menu
/news
/contact
/login
/register
/account
/orders
/checkout

## Components

### Layout

- SiteHeader
- MainNav
- SiteFooter

### Menu

- ProductCard
- ProductGrid
- MenuSearch

### Cart

- CartDialog
- CartProvider

## Data

- products
- news
- order-history

## Migration principle

Migrate incrementally.

Do not rewrite the entire project at once.

Preserve existing behavior unless explicitly changed.

## Engineering principles

- TypeScript strict
- No `any`
- Small changes
- Reuse existing code
- Avoid unnecessary dependencies
- Test important behavior
- Review git diff
