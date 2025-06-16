import { SocialLinkType } from '@/types';

const SOCIAL_LINKS_PATH = '/icons/social';

export const socialLinks: SocialLinkType[] = [
    {
        id: '1',
        title: 'instagram',
        imgUrl: SOCIAL_LINKS_PATH + '/instagram.svg',
    },
    {
        id: '2',
        title: 'linkedIn',
        imgUrl: SOCIAL_LINKS_PATH + '/linkedIn.svg',
    },
    {
        id: '3',
        title: 'twitter',
        imgUrl: SOCIAL_LINKS_PATH + '/twitter.svg',
    },
    {
        id: '4',
        title: 'facebook',
        imgUrl: SOCIAL_LINKS_PATH + '/facebook.svg',
    },
];
