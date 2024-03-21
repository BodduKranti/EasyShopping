export const Truncate = (str: string) => {
    if (str.length < 27) return str
    return str.substring(0, 27) + '...'
}