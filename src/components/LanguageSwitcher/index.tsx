import { useState } from 'react';

import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { languages } from '@/constants/languages';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(locale);

    const handleChange = (event: SelectChangeEvent) => {
        const newLocale = event.target.value as string;
        setSelectedLanguage(newLocale);
        setCookie('locale', newLocale);
        router.refresh();
    };

    return (
        <Select autoWidth value={selectedLanguage} onChange={handleChange}>
            {languages.map(({ id, title, imgUrl, code }) => {
                return (
                    <MenuItem
                        key={id}
                        sx={{ justifyContent: 'space-between', width: '150px' }}
                        value={code}
                    >
                        <Image
                            src={imgUrl}
                            alt={title}
                            width={30}
                            height={30}
                        />
                        <Typography fontFamily='SenFont' fontSize={14}>
                            {title}
                        </Typography>
                    </MenuItem>
                );
            })}
        </Select>
    );
}
