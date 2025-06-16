import { ReadonlyURLSearchParams } from 'next/navigation';

export function configUrlParams(searchParams: ReadonlyURLSearchParams) {
    const newParams = new URLSearchParams(searchParams.toString());

    return function (name: string, value: string): URLSearchParams {
        newParams.set(name, value);
        return newParams;
    };
}
