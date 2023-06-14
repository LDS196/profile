export function extractNumbersFromString(str: string): string {
    return str.replace(/\D/g, "")
}
