import styles from './postList.module.scss';

import PostCard from '@/components/PostCard';
import { posts } from '@/constants/posts';
import contentSectionStyle from '@/styles/contentSection.module.scss';

export default function PostList() {
    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>All posts</h1>
                <hr className={styles.horizontalLine} />
                <div className={styles.listContainer}>
                    {posts.map((post) => {
                        return <PostCard key={post.id} {...post} />;
                    })}
                </div>
                <div className={styles.paginationContainer}>
                    <button disabled={true}>{'< Prev'}</button>
                    <button>{'Next >'}</button>
                </div>
            </div>
        </section>
    );
}
