'use client';

import { MouseEvent } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import normalStyles from './postCard.module.scss';
import smallStyles from './smallPostCard.module.scss';

import { imageConfig } from '@/components/PostCard/config';
import { PATHS } from '@/constants/paths';
import { PostType } from '@/types';

interface PostCardProps {
    post: PostType;
    isSuggestionCard?: boolean;
}

export default function PostCard({ post, isSuggestionCard }: PostCardProps) {
    const { id, title, author, category, description, imgUrl, date } = post;
    const router = useRouter();

    const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        router.push(PATHS.POST + id);
    };

    if (isSuggestionCard) {
        return (
            <section className={smallStyles.section} onClick={handleOnClick}>
                <div className={smallStyles.imageContainer}>
                    <Image src={imgUrl} alt={title} {...imageConfig} />
                </div>
                <div className={smallStyles.informationContainer}>
                    <div className={smallStyles.infoContainer}>
                        <p className={smallStyles.metaInfo}>
                            By{' '}
                            <span className={smallStyles.authorSpan}>
                                {author}
                            </span>
                        </p>
                        <div className={smallStyles.verticalDevider}></div>
                        <p className={smallStyles.metaInfo}>{date}</p>
                    </div>
                    <p className={smallStyles.title}>{title}</p>
                    <p className={smallStyles.description}>{description}</p>
                </div>
            </section>
        );
    }

    return (
        <section className={normalStyles.section} onClick={handleOnClick}>
            <div className={normalStyles.imageContainer}>
                <Image src={imgUrl} alt={title} {...imageConfig} />
            </div>
            <div className={normalStyles.informationContainer}>
                <p className={normalStyles.category}>{category}</p>
                <p className={normalStyles.title}>{title}</p>
                <p className={normalStyles.description}>{description}</p>
            </div>
        </section>
    );
}
