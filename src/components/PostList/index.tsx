import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import styles from './postList.module.scss';

import PostCard from '@/components/PostCard';
import contentSectionStyle from '@/styles/contentSection.module.scss';
import { PostType } from '@/types';

interface PostListProps {
    posts: PostType[];
    searchParams?: Promise<{
        page?: string;
    }>;
}

export default async function PostList({ posts, searchParams }: PostListProps) {
    const t = await getTranslations('HomePage');

    const params = await searchParams;

    const currentPage = Number(params?.page) || 1;

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t('PostList.SectionTitle')}</h1>
                <hr className={styles.horizontalLine} />
                <div className={styles.listContainer}>
                    {posts.map((post) => {
                        return <PostCard key={post.uuid} post={post} />;
                    })}
                </div>
                <div className={styles.paginationContainer}>
                    <Link
                        href={`?page=${currentPage - 1}`}
                        className={styles.paginationButton}
                        aria-disabled={currentPage <= 1}
                    >
                        {t('Pagination.Prev')}
                    </Link>
                    <Link
                        href={`?page=${currentPage + 1}`}
                        className={styles.paginationButton}
                    >
                        {t('Pagination.Next')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
