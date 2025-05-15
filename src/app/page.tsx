import CategoriesList from '@/components/CategoriesList';
import FeaturePostComponent from '@/components/FeaturePost';
import PostList from '@/components/PostList';

const featurePost = {
    title: 'Step-by-step guide to choosing great font pairs',
    author: 'John Doe',
    description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    date: 'May 23, 2022',
    imgUrl: '/featurePostMockImg.png',
};

export default function HomePage() {
    return (
        <main>
            <FeaturePostComponent {...featurePost} />
            <PostList />
            <CategoriesList />
        </main>
    );
}
