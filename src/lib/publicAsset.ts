/** Resolve files in public/ against Vite's deployment base. */
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
