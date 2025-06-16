'use client';

import { useState } from 'react';

import {
    Box,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import * as style from './styled';

import { languages } from '@/constants/languages';
import { LanguageType } from '@/types';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState<string>(locale);

    const handleOnChange = (event: SelectChangeEvent): void => {
        const newLocale = event.target.value;
        setSelectedLanguage(newLocale);
        setCookie('locale', newLocale);
        handleOnClose();
        router.refresh();
    };

    const handleOnClose = (): void => {
        requestAnimationFrame(() => {
            const target = document.activeElement as HTMLElement;
            target?.blur();
        });
    };

    const SelectedValue = ({ imgUrl, title }: LanguageType) => (
        <Box {...style.selectedContainer}>
            <Image src={imgUrl} alt={title} width={24} height={24} />
            <Typography {...style.selectedText}>{title}</Typography>
        </Box>
    );

    return (
        <Select
            value={selectedLanguage}
            onChange={handleOnChange}
            MenuProps={{ disableScrollLock: true }}
            onClose={handleOnClose}
            {...style.select}
            renderValue={(selected) => {
                const selectedItem = languages.find(
                    (lang) => lang.code === selected,
                );
                return selectedItem ? (
                    <SelectedValue {...selectedItem} />
                ) : null;
            }}
        >
            {languages.map(({ id, title, imgUrl, code }) => (
                <MenuItem key={id} {...style.menuItem} value={code}>
                    <Image src={imgUrl} alt={title} width={24} height={24} />
                    <Typography {...style.text}>{title}</Typography>
                </MenuItem>
            ))}
            )
        </Select>
    );
}
