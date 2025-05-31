import { getTranslations } from 'next-intl/server';

import styles from './postList.module.scss';
import PaginationButtons from '../PaginationButtons';

import PostCard from '@/components/PostCard';
import contentSectionStyle from '@/styles/contentSection.module.scss';
import { getAllPosts } from '@/utils';

interface PostListProps {
    category: string;
    page: string;
    locale: string;
}

export default async function PostList({
    category,
    page,
    locale,
}: PostListProps) {
    const posts = await getAllPosts(category, page, locale);

    const t = await getTranslations('HomePage');

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
                <PaginationButtons />
            </div>
        </section>
    );
}
