import { useCallback, useMemo } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

export function useUrlParams(param: string) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentParam = useMemo(
        () => searchParams.get(param),
        [searchParams, param],
    );

    const setNewParam = useCallback(
        (value: string) => {
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set(param, value);
            router.push(`?${newParams.toString()}`);
        },
        [searchParams, router, param],
    );

    return { currentParam, setNewParam };
}
