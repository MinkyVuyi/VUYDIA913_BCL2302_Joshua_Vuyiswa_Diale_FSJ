//import ResultsTitle from './../../Udemy-Nextjs/NextJs-section4/components/events/results-title';

function UserProfilePage(props) {
return <h1>{props.username}</h1>
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    // console.log(req); //default node objects for incoming messages and responses
    // console.log(res);

    console.log('Server side');

    return {
        props: {
            username: 'Max'
        }
    };
}