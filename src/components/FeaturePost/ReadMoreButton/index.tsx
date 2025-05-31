'use client';

import { MouseEvent } from 'react';

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

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
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
