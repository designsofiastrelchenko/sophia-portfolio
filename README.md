# Софья Стрельченко — portfolio

React + TypeScript + Vite, React Router, plain CSS. No UI library or Tailwind.

## Development

```sh
npm install
npm run dev
npm run build
npm run lint
```

On Windows PowerShell with restricted script execution, use `npm.cmd`.

## Routes and content

- `/` — profile, experience, education, and three linked project showcases.
- `/projects/storage-app` — storage application.
- `/projects/b2b-saas` — seller workspace.
- `/projects/fintech` — mobile banking.
- `/resume.html` — temporary standalone résumé.
- `?version=short` — persistent condensed case version. Section anchors and browser history remain available.

Profile, experience, education, tool asset names, and project content live in `src/data/portfolio.ts`. The shared case template is `src/pages/ProjectPage.tsx`. Unknown routes include a recovery link.

Production hosting must serve `index.html` for unmatched application routes. Vite development and preview servers provide this fallback.

## Visual system

The approved asymmetric profile / project layout is preserved. Homepage growth is capped at 1440px; cases use a 1200px grid with full-width artwork and readable text columns. Tablet reorganizes the profile beside experience / education, followed by the project feed. Mobile stacks the profile and projects.

Onest is self-hosted in `public/fonts`, with variable Latin and Cyrillic subsets, weights 400–600, preload, and font-display swap. The license is `public/fonts/Onest-OFL.txt`. Old font assets remain unused rather than deleting existing project files.

`tokens.css` defines neutral surfaces, the spacing scale, radii (8 / 12 / 16 / 24px, with 4px inner segment corners), and motion (180 / 260 / 280 / 440ms). The shared segmented geometry follows `references/frame.png.png`. Version controls expose pressed state without changing dimensions. Tags are metadata, not pretend interactive controls.

`CaseNavigation` replaces the vertical sidebar with a sticky, contained horizontal navigation block and current-section state. Tablet and mobile use a compact disclosure menu with wrapped links rather than a horizontal scroll strip. Mobile artwork has a large internal canvas with native scrolling, keyboard access, and 44px previous / next controls. Only the preview scales on project hover; the mask and card layout remain fixed. Profile, project, case-section, and footer groups reveal with a small opacity/translate transition; reduced motion disables transforms and transitions.

`Icon` supplies rounded, filled UI icons. UI actions use the shared icon set, including dedicated back, forward, and external-link marks; the case navigation is a contained horizontal block on desktop and a compact disclosure on smaller screens. `Footer` is shared across the homepage and cases.

## Assets and temporary material

- All 11 actual files in `public/icons/tools/` are used without modifying their SVG contents or original double extensions. Atlassian is one asset. ProtoPie is supplied as a horizontal wordmark and is shown intact.
- `public/favicon.png` is a byte-identical copy of `references/icon.png.png`.
- The avatar is a decorative solid gray circle.
- «Небо», Студия MAX, Агентство ММР, and Фриланс have neutral square placeholders. Set an entry's optional `logo` URL to replace one. Education uses the same entry system.
- Education is explicitly temporary mock data. Existing biography, experience dates, project narratives, and résumé content still require the designer's verification.
- Email, LinkedIn, and Figma destinations remain placeholders; update `portfolio.ts`.
- Storage artwork uses the existing SVG framing of the supplied reference screenshots. Only artwork is visible; page text and controls are native HTML.
- B2B and fintech retain their HTML/CSS demonstration artwork, now with Onest and consistent UI icons. They are not final product exports.
- Lower case sections still contain simplified process, typography, and component specimens. Detailed flow maps, concept explorations, and final screen collections from the references need original project exports; these have not been fabricated. Reference files are unchanged.

## Verification — September 11, 2026

Production build and Oxlint pass. Browser QA in headless Chrome covers all four application routes at 1920, 1600, 1440, 1366, 1280, 1024, 834, 768, 430, 390, and 375px, including full / short versions. No horizontal page overflow, broken assets, or undersized interactive targets were found.

233 browser assertions pass: route entry and reload, history-backed version persistence, anchor/current section state, keyboard skip link and visible focus, stable card and segmented-control geometry, reduced motion, mobile gallery buttons and arrow-key scrolling, navigation scrolling, missing-route recovery, all 11 tool assets, and favicon source equality. Axe checks at 1440 and 390px report no violations for the homepage, three cases, and standalone résumé. This automated audit complements visual review; it does not claim exhaustive accessibility certification.

The review used the [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md). Browser automation was run from the local temporary directory without adding application dependencies.
