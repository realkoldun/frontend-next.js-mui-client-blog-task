export async function checkImage(url: string) {
    try {
        const response = await fetch(url);
        return response.ok ? url : '/imageOnError.png';
    } catch {
        return '/imageOnError.png';
    }
}
