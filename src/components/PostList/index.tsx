import styles from './postList.module.scss';
import PaginationButtons from '../PaginationButtons';

import { GetAllPostsReturnValue } from '@/api/getAllPosts';
import PostCard from '@/components/PostCard';
import contentSectionStyle from '@/styles/contentSection.module.scss';

interface PostListProps {
    postsData: GetAllPostsReturnValue;
    translation: (key: string) => string;
}

export default async function PostList(props: PostListProps) {
    const { translation, postsData } = props;
    const { posts, totalPages } = postsData;

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
