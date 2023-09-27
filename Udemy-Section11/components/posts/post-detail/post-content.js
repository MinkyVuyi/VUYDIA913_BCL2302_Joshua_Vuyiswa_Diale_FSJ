import ReactMarkdown from 'react-markdown';

import PostHeader from "./post-header";
import classes from './post-content.module.css';

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs',
    date: '2023-09-27',
    content: '# This is a first post'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} 
            image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;