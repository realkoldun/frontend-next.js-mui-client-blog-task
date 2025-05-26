import CategoriesList from '@/components/CategoriesList';
import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { getPosts } from '@/utils/apiUtils';
//import { posts } from '@/constants/posts';

export default async function HomePage() {
    const posts = await getPosts();

    const featurePost = posts[Math.floor(Math.random() * posts.length)];

    return (
        <main>
            <FeaturePost {...featurePost} />
            <PostList posts={posts} />
            <CategoriesList />
        </main>
    );
}
