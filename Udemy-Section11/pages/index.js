import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS =[
    { slug: 'getting-started-with-nextjs', 
    title: 'Getting Started with NextJS', image:'getting-started-with-nextjs', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date:'2023-09-26', 
},
{ slug: 'getting-started-with-nextjs2', 
    title: 'Getting Started with NextJS', image:'getting-started-with-nextjs', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date:'2023-09-26', 
},
{ slug: 'getting-started-with-nextjs3', 
    title: 'Getting Started with NextJS', image:'getting-started-with-nextjs', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date:'2023-09-26', 
},
{ slug: 'getting-started-with-nextjs4', 
    title: 'Getting Started with NextJS', image:'getting-started-with-nextjs', 
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.', 
    date:'2023-09-26', 
},
];

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}

export default HomePage;

// 1) Hero Section - where we present ourselves
// 2) Featured Posts
