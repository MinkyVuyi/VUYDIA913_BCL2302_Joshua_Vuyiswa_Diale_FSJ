import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';



function HomePage() { 
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );

    export function getStaticProps() {
        const FeaturedPosts = getFeaturedPosts();
       
        return {
            props: {
                posts: FeaturedPosts
            }
        }
    }
}

export default HomePage;

// 1) Hero Section - where we present ourselves
// 2) Featured Posts
