# nakajs

A minimal, responsive portfolio built with React 19, TypeScript, and Tailwind CSS. Designed to be forked and customized for your own use.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** for utility styling
- **Styled Components** for component-scoped styles
- **React Router DOM** for client-side routing
- **React Hook Form** + **Zod** for form validation
- **EmailJS** for client-side contact form delivery
- **react-icons** for tech brand icons
- **i18n** — custom, zero-dependency, supporting EN / PT / ES

## Features

- Sticky header with expanded/compact states and scroll hysteresis
- Bottom navigation bar for mobile (thumb-zone friendly)
- Lazy-loaded pages with route-based code splitting
- About, Experience, Portfolio, Contact, and FAQ sections
- Interactive portfolio showcase grid with project detail loading
- Vertical timeline for experience projects
- Accessible accordion FAQ with markdown link parsing
- Contact form with honeypot spam protection and submission cooldown
- CV download link
- iPhone safe area (notch) support
- WCAG AA contrast compliance

## Getting Started

```bash
# clone
git clone https://github.com/mhnakashima/nakajs.git
cd nakajs

# install
npm install

# dev server
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

## Customization

1. **Content** — Edit `src/config/i18n.ts` for all text, `src/config/experience.ts` for work history, and `src/config/portfolio.ts` for projects.
2. **Navigation** — Toggle pages on/off in `src/config/site.ts`.
3. **Images** — Replace files in `public/images/` with your own logos and project screenshots.
4. **Contact form** — Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials. Without them, the form falls back to `mailto:`.
5. **Colors & fonts** — Adjust Tailwind theme variables in `src/index.css`.

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Avatar, Logo, StatusBadge, LocaleSwitcher, MenuIcon, NavLink
│   ├── molecules/      # HeaderInfo, NavLinks, MobileMenu, TechBadge, ProjectCard,
│   │                     CompanySection, ContactLinks
│   ├── organisms/      # Header, Layout, BottomTabBar
│   └── icons/          # Consolidated SVG icon components
├── config/             # i18n translations, site config, experience/portfolio data, tech icons
├── context/            # I18nContext provider
├── hooks/              # useScrollPosition, useHeaderHeight, useTranslation
├── pages/              # About, Experience, Portfolio, Contact, FAQ
├── schemas/            # Zod form validation schemas
├── types/              # TypeScript type definitions
├── utils/              # techColor, sanitize, nl2br helpers
├── routes.tsx          # Route definitions with lazy loading
├── App.tsx             # App shell (providers, header, layout, bottom bar)
└── main.tsx            # Entry point
```

## License

[Apache 2.0](LICENSE)
