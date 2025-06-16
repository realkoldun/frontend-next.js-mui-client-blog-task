const ELLIPSIS = '...';

export function formatString(string: string, maxLength: number): string {
    if (string.length <= maxLength) return string;

    return string.slice(0, maxLength) + ELLIPSIS;
}
