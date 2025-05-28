import { getTranslations } from 'next-intl/server';

import styles from './postList.module.scss';

import PostCard from '@/components/PostCard';
import contentSectionStyle from '@/styles/contentSection.module.scss';
import { PostType } from '@/types';

interface PostListProps {
    posts: PostType[];
}

export default async function PostList({ posts }: PostListProps) {
    const t = await getTranslations('HomePage');

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t('PostList.SectionTitle')}</h1>
                <hr className={styles.horizontalLine} />
                <div className={styles.listContainer}>
                    {posts.map((post) => {
                        return <PostCard key={post.id} post={post} />;
                    })}
                </div>
                <div className={styles.paginationContainer}>
                    <button disabled={true}>{t('Pagination.Prev')}</button>
                    <button>{t('Pagination.Next')}</button>
                </div>
            </div>
        </section>
    );
}
