import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {formatDistance} from "date-fns";
import Comments from "@/Pages/Github/Components/Comments.jsx";
import ReactMarkdown from 'react-markdown';
import NavBarHome from "@/Pages/Github/Components/NavBarHome.jsx";

// Create a client
const queryClient = new QueryClient();

function IssueDetails({issue_number}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Details issueNumber={issue_number} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

function Details({issueNumber}) {
    const {
        isSuccess,
        data: issue
    } = useQuery(['issue', issueNumber], fetchIssue);

    function fetchIssue() {
        return fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
            .then(response => response.json());
    }

    return (
        <>
            <NavBarHome />
            {isSuccess && (
                <div className="comments-container">
                    <h2>
                        {issue.title} <span>#{issue.number}</span>
                    </h2>
                    <div className="issue-details">
                        <a href={issue.user.html_url}>{issue.user.login}</a> opened this issue {formatDistance(new Date(issue.created_at), new Date(), { addSuffix: true })}
                    </div>

                    <div className="comment-container">
                        <a href={issue.user.html_url}>
                            <img
                                src={issue.user.avatar_url}
                                alt="avatar"
                                className="avatar"
                            />
                        </a>
                        <div className="comment">
                            <div className="comment-heading">
                                <a href={issue.user.html_url}>{issue.user.login}</a> commented {formatDistance(new Date(issue.created_at), new Date(), { addSuffix: true })}
                            </div>
                            <div className="comment-body markdown-body ">
                                <ReactMarkdown children={issue.body} />
                            </div>
                        </div>
                    </div>

                    <div className="border"></div>
                    <Comments issueNumber={issue.number} />
                </div>
            )}
        </>
    );
}

export default IssueDetails;
