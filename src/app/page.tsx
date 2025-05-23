import CategoriesList from '@/components/CategoriesList';
import FeaturePostComponent from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { posts } from '@/constants/posts';

const featurePost = posts[Math.floor(Math.random() * posts.length)];

export default function HomePage() {
    return (
        <main>
            <FeaturePostComponent {...featurePost} />
            <PostList />
            <CategoriesList />
        </main>
    );
}
