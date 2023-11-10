
export function copyText(text) {
    const copy = () => {
        navigator.clipboard.writeText(text)
    }

    return copy
}