const SMALL_PAGE_COUNT = 5;

export function generatePagination(currentPage: number, totalPages: number) {
    const pages: (number | string)[] = [];

    if (totalPages <= SMALL_PAGE_COUNT) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
        for (let i = 1; i <= Math.min(5, totalPages); i++) {
            pages.push(i);
        }
        if (totalPages > 5) {
            pages.push('...', totalPages);
        }
        return pages;
    }

    pages.push(1, '...');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (currentPage < totalPages - 2) {
        pages.push('...');
    }

    pages.push(totalPages);

    return pages;
}
