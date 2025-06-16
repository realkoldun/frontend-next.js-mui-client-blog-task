'use server';

import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

import { languages } from '@/constants/languages';
import { LanguageCodes } from '@/types';

export default getRequestConfig(async () => {
    const locale =
        (await cookies()).get('locale')?.value || LanguageCodes.ENGLISH;

    const supportedLocales = languages.map(({ code }) => code as string);
    const activeLocale = supportedLocales.includes(locale)
        ? locale
        : LanguageCodes.ENGLISH;

    return {
        locale: activeLocale,
        messages: {
            ...(
                await import(`../../public/locales/${activeLocale}/common.json`)
            ).default,
            ...(
                await import(
                    `../../public/locales/${activeLocale}/categories.json`
                )
            ).default,
        },
    };
});
