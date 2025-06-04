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

    const handleChange = (event: SelectChangeEvent) => {
        const newLocale = event.target.value as string;
        setSelectedLanguage(newLocale);
        setCookie('locale', newLocale);
        router.refresh();
    };

    const SelectedValue = ({ imgUrl, title }: LanguageType) => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <Image src={imgUrl} alt={title} width={24} height={24} />
                <Typography {...style.selectedText}>{title}</Typography>
            </Box>
        );
    };

    return (
        <Select
            value={selectedLanguage}
            onChange={handleChange}
            MenuProps={{ disableScrollLock: true }}
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
            {languages.map(({ id, title, imgUrl, code }) => {
                return (
                    <MenuItem key={id} {...style.menuItem} value={code}>
                        <Image
                            src={imgUrl}
                            alt={title}
                            width={24}
                            height={24}
                        />
                        <Typography {...style.text}>{title}</Typography>
                    </MenuItem>
                );
            })}
        </Select>
    );
}
