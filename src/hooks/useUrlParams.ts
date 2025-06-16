import { useCallback, useMemo } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

type UseUrlParamsReturnValue = [string | null, (value: string) => void];

export function useUrlParams(
    param: string,
    resetUrl?: boolean,
): UseUrlParamsReturnValue {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentParam = useMemo(
        () => searchParams.get(param),
        [searchParams, param],
    );

    const setNewParam = useCallback(
        (value: string) => {
            if (resetUrl) {
                router.push(`?${param}=${value}`);
                return;
            }

            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set(param, value);
            router.push(`?${newParams.toString()}`);
        },
        [searchParams, router, param, resetUrl],
    );

    return [currentParam, setNewParam];
}
