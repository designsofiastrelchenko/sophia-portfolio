// Positions belong to history entries, rather than URLs or the browser's late
// automatic restoration. A new document deliberately starts with an empty map.
const positions = new Map<string, number>()

export const savedPageScroll = (key: string) => positions.get(key)
export const savePageScroll = (key: string, top: number) => { positions.set(key, top) }
