import styles from './postList.module.scss';
import PaginationButtons from '../PaginationButtons';

import { getAllPosts } from '@/api';
import PostCard from '@/components/PostCard';
import contentSectionStyle from '@/styles/contentSection.module.scss';

interface PostListProps {
    category: string;
    page: string;
    locale: string;
    translation: (key: string) => string;
}

export default async function PostList(props: PostListProps) {
    const { category, locale, translation, page } = props;
    const { posts, totalPages } = await getAllPosts(category, page, locale);

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {translation('PostList.SectionTitle')}
                </h1>
                <hr className={styles.horizontalLine} />
                <div className={styles.listContainer}>
                    {posts.map((post) => (
                        <PostCard key={post.uuid} post={post} />
                    ))}
                </div>
                <PaginationButtons totalPages={totalPages} />
            </div>
        </section>
    );
}
