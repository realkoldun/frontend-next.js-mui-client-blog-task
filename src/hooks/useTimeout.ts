import { useEffect } from 'react';

interface UseTimeoutArgs {
    callback: () => void;
    ms: number;
}
export function useTimeout({ callback, ms }: UseTimeoutArgs) {
    useEffect(() => {
        const timerId = setTimeout(callback, ms);

        return () => clearTimeout(timerId);
    }, [callback, ms]);
}
