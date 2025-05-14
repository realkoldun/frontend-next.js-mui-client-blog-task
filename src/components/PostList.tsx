import styles from '@/styles/postList.module.scss';
import PostCard from '@/components/PostCard';
import ContentSection from '@/components/ContentSection';
import { posts } from '@/constants/posts';

export default function PostList() {
    return (
        <ContentSection>
            <div className={styles['post-list__container']}>
                <h1 className={styles['post-list__title']}>All posts</h1>
                <hr />
                <div className={styles['post-list__list-container']}>
                    {posts.map((post) => {
                        return <PostCard key={post.id} {...post} />;
                    })}
                </div>
                <div className={styles['pagination-container']}>
                    <button disabled={true}>{'< Prev'}</button>
                    <button>{'Next >'}</button>
                </div>
            </div>
        </ContentSection>
    );
}
