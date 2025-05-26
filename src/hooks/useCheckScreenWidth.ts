import { useEffect, useState } from 'react';

interface UseCheckScreenWidthArgs {
    targetWidth: number;
    isWither: boolean;
}

export function useCheckScreenWidth({
    targetWidth,
    isWither,
}: UseCheckScreenWidthArgs): boolean {
    const [screenWidth, setScreenWidth] = useState<number>(
        () => targetWidth + 1,
    );
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleOnResize = () => {
                setScreenWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleOnResize);
            return () => window.removeEventListener('resize', handleOnResize);
        }
    }, [setScreenWidth]);

    return isWither ? screenWidth > targetWidth : screenWidth < targetWidth;
}
