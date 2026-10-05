type YandexMetrika = ((...args: unknown[]) => void) & {
  a?: unknown[][]
  l?: number
}

type MicrosoftClarity = ((...args: unknown[]) => void) & {
  q?: unknown[][]
}

interface Window {
  ym?: YandexMetrika
  clarity?: MicrosoftClarity
}
