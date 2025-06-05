const PAGE_PADDING = 1;
const END_OFFSET = 2;

export function generatePagination(
    currentPage: number,
    totalPages: number,
    isSmallPage?: boolean,
) {
    const pages: (number | string)[] = [];

    const SMALL_PAGE_COUNT = isSmallPage ? 3 : 5;
    const MIN_VISIBLE_PAGES = isSmallPage ? 4 : 5;
    const START_THRESHOLD = isSmallPage ? 3 : 4;

    if (totalPages <= SMALL_PAGE_COUNT) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= START_THRESHOLD) {
        for (let i = 1; i <= Math.min(MIN_VISIBLE_PAGES, totalPages); i++) {
            pages.push(i);
        }
        if (totalPages > MIN_VISIBLE_PAGES) {
            pages.push('...', totalPages);
        }
        return pages;
    }

    pages.push(1, '...');

    const start = Math.max(3, currentPage - PAGE_PADDING);
    const end = Math.min(totalPages - PAGE_PADDING, currentPage + PAGE_PADDING);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (currentPage < totalPages - END_OFFSET) {
        pages.push('...');
    }

    pages.push(totalPages);

    return pages;
}
