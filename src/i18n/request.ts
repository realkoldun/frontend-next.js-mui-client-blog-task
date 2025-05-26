import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

import { languages } from '@/constants/languages';

export default getRequestConfig(async () => {
    const locale = (await cookies()).get('locale')?.value || 'en';

    const supportedLocales = languages.map(({ code }) => code as string);
    const activeLocale = supportedLocales.includes(locale) ? locale : 'en';

    return {
        locale: activeLocale,
        messages: (await import(`../locales/${activeLocale}/common.json`))
            .default,
    };
});
