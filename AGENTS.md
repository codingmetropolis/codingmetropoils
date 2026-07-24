# Creative Agency Next.js Project

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
- Pages: Next.js pages in `/pages` (each file = route)
- Components: Reusable UI in `/components`
- Sections: Page sections in `/sections` (organized by Home page sections)
- Styles: SCSS in `/styles` (main.scss imported globally)
- Assets: Data in `/assets/data`, images in `/public/images`

## Important Conventions
- Alias import: `@/*` maps to root (configured in jsconfig.json)
- Layout: All pages use Layout component from `/components/common/Layout.jsx`
- SEO: Meta tags managed in `_document.js` (global) and per page in Head
- Styling: SCSS modules with global main.scss import in _app.js
- Images: Stored in `/public/images` and referenced with `/images/path`
- Data: Static data in `/assets/data/dummydata.js` (imported by components)

## Component Organization
- Header/Footer: `/components/common/Header.js` and `Footer.js`
- Reusable UI: `/components` (Button, Card, etc.)
- Section-specific: `/sections` (Hero, Services, etc.)
- Shared components: `/components/router.js` exports common section components

## Styling Notes
- Global styles: `/styles/main.scss` imported in `_app.js`
- Component styles: Individual SCSS files in `/styles/`
- CSS variables: Defined in `/styles/_color_palette.scss` and `_function.scss`

## Environment
- Example: `.env.example` (GraphCMS configuration)
- Local: `.env.local` (gitignored)
- Production: `.env.production` 
- Key: `NEXT_PUBLIC_GRAPHCMS_ENDPOINT` and `GRAPHCMS_TOKEN` for GraphCMS

## Image Optimization
- Next.js Image component not used - standard img tags observed
- Consider adding lazy loading and optimization for Core Web Vitals

## Dependency Updates
- Current Next.js version is 13.3.0 (latest is 16.2.11)
- Consider updating dependencies but test thoroughly as this is a major version jump
- Run `npm outdated` to check for updates
- Consider incremental updates or using a version manager for testing