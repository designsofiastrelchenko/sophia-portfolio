# Localization

Russian copy in the existing content modules remains the source of truth. `ru.json` is the source-string catalogue; `en.json` contains the authored English equivalents. Source strings act as keys, so sections, diagram rules, routes, IDs, and image URLs retain their original values.

`LocaleProvider` owns the selected language (RU by default) and persists it under `portfolio.locale`. It updates document language, page metadata, and preserves the visible reading position when switching languages. `useLocale().t()` is available for generated strings and page titles.

The local JSX runtime translates text children and language-bearing attributes at DOM/Motion/Link boundaries. It preserves component identity for routing and presence, element keys, refs, event handlers, and DOM structure. `Typography`, `InlineArrows`, and `MetaSeparatedText` handle text returned through fragments. Do not translate business data before section/diagram selection.

Add a Russian key and a natural English translation to the catalogue when introducing new copy. English product names, URLs, contact details, metrics, and image/video assets stay unchanged.

Run `node scripts/check-locales.mjs` to check coverage, numeric values, and dynamic labels. Browser QA should also scan text and accessibility attributes in both languages, including open menus and media controls.

Loading dots use four 400 ms steps in the critical CSS in `index.html`, so they work before the application bundle is ready. The pre-bundle text reads the same saved locale. Reduced motion shows three static dots. The loader is mounted outside routing and disappears as soon as the initial interface is ready.
