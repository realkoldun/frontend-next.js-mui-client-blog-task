import CategoriesList from '@/components/CategoriesList';
import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { getPosts } from '@/utils/apiUtils';

export default async function HomePage() {
    const posts = await getPosts();

    const featurePost = posts[0];

    return (
        <main>
            <FeaturePost {...featurePost} />
            <PostList posts={posts} />
            <CategoriesList />
        </main>
    );
}
