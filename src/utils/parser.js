import queryString from "query-string"

export function parseHash(strHash) {
    if (!strHash) {
        return []
    }

    const parsedHash = new URLSearchParams(strHash.substring(1))
    const keys = parsedHash.keys()

    const result = []
    for (const key of keys) {
        result.push({key, value: parsedHash.get(key)})
    }
    return result
}

export  function parseQuery(strSearch) {
    if (!strSearch) {
        return []
    }

    const parsedQuery = queryString.parse(strSearch)
    const keys = Object.keys(parsedQuery)
    const result = keys.map((key) => ({
      key,
      value: parsedQuery[key]
    }))
    return result
}