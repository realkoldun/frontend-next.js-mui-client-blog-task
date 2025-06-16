import { getDefaultCategory } from '@/helpers/getDefaultCategory';
import { SearchParams } from '@/types';

interface ExtractSearchParamsReturnValue {
    category: string;
    page: string;
}

export async function extractSearchParams(
    searchParams?: SearchParams,
): Promise<ExtractSearchParamsReturnValue> {
    const params = await searchParams;
    const page = params?.page || '1';
    const category = getDefaultCategory(params?.category);

    return { category: category.title, page };
}
