'use client';

import { useEffect, useState } from 'react';

interface UseCheckScreenWidthArgs {
    targetWidth: number;
    isWider: boolean;
}

export function useCheckScreenWidth({
    targetWidth,
    isWider,
}: UseCheckScreenWidthArgs): boolean | undefined {
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined,
    );
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth);
            const handleOnResize = () => {
                setScreenWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleOnResize);
            return () => window.removeEventListener('resize', handleOnResize);
        }
    }, []);

    if (!screenWidth) return undefined;

    return isWider ? screenWidth > targetWidth : screenWidth < targetWidth;
}
