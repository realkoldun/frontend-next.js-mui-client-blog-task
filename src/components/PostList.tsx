import PostCard from '@/components/PostCard';
import { posts } from '@/constants/posts';
import contentSectionStyle from '@/styles/contentSection.module.scss';
import styles from '@/styles/postList.module.scss';

export default function PostList() {
    return (
        <section className={contentSectionStyle['content-section']}>
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
        </section>
    );
}
