import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState();

    function loadFeedbackHandler(id) {
        fetch(`/api/${id}`).then(response.json()).then(data => {
            setFeedbackData(data.feedback);
        });  // /api/some-feedback-id
    }
    return (
        <Fragment>
            {feedbackData && <p>{feedback.email}</p>}
            <ul>
                {props.feedbackItems.map((item) => (
                    <li key={item.id}>{item.text} <button onclick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return {
        props: {
            feedbackItems: data,
        },
    };
}

export default FeedbackPage;