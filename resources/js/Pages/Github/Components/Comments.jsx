import {useQuery} from "react-query";
import {formatDistance} from "date-fns";
import ReactMarkdown from "react-markdown";

function Comments({issueNumber}) {
    const {
        isSuccess,
        data: comments
    } = useQuery(['comments', issueNumber], fetchComments);

    const number = issueNumber;

    function fetchComments() {
        return fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}/comments`)
            .then(response => response.json());
    }

    return (
        <>
            {isSuccess && (
                <>
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-container">
                            <a href={comment.user.html_url}>
                                <img
                                    src={comment.user.avatar_url}
                                    alt="avatar"
                                    className="avatar"
                                />
                            </a>
                            <div className="comment">
                                <div className="comment-heading">
                                    <a href={comment.user.html_url}>{comment.user.login}</a> commented {formatDistance(new Date(comment.created_at), new Date(), { addSuffix: true })}
                                </div>
                                <div className="comment-body markdown-body">
                                    <ReactMarkdown children={comment.body} />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}

export default Comments;
