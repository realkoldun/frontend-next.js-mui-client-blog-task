export function formatDate(isoDate: string, locale: string): string {
    const date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return new Intl.DateTimeFormat(
        `${locale}-${locale.toUpperCase()}`,
        options,
    ).format(date);
}
