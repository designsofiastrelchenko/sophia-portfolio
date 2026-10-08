# Портфолио Софьи Стрельченко

Личное портфолио UX/UI & Product Designer на React, TypeScript и Vite.

## Разработка

```sh
npm ci
npm run dev
```

Проверки: `npm run lint` и `npm run build`.

## GitHub Pages

В настройках репозитория **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions**. Публикация запускается при отправке изменений в ветку `master` или вручную из Actions. Сайт собирается для адреса `https://designsofiastrelchenko.github.io/sophia-portfolio/`.

Workflow собирает Vite-приложение в job `build` и передаёт только `dist` в job `deploy`. Исходники и документация не публикуются; Jekyll не используется. Production/preview base — `/sophia-portfolio/`. Пустой файл `public/.nojekyll` копируется Vite в `dist/.nojekyll`, а `dist/404.html` обеспечивает SPA fallback.
