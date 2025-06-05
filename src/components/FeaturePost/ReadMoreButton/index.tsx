'use client';

import { MouseEvent, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

import StyledButton from '@/components/StyledButton';
import { PATHS } from '@/constants/paths';

interface ReadMoreButtonProps {
    uuid: string;
}

export default function ReadMoreButton({ uuid }: ReadMoreButtonProps) {
    const router = useRouter();
    const t = useTranslations('HomePage.FeaturePost');

    useEffect(() => {
        router.prefetch(PATHS.POST + uuid);
    }, [router, uuid]);

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        router.push(PATHS.POST + uuid);
    };

    return (
        <StyledButton
            onClick={handleOnClick}
            text={t('ButtonText')}
        ></StyledButton>
    );
}
