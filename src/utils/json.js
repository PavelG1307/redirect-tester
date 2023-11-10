export function createJSON(items) { 
    const entries = items.map((item) => [item.key, item.value])
    const obj = Object.fromEntries(entries)
    return JSON.stringify(obj, null, 2)
}