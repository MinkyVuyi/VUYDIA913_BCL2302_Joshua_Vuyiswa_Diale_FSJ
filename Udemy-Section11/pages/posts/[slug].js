import { getPostsFiles } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";


function PostDetailPage(props) {
    return (
        <PostContent post={props.post}/>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

   const postData = getPostData(slug);

   return {
    props: {
        post: postData
    },
    revalidate: 600
   }
}

export function getStaticPaths() {
    getPostsFiles();

    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default PostDetailPage;