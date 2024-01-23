import Issues from "@/Pages/Github/Components/Issues.jsx";

function IssuesApp() {
    const fakeArray = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
            <div className="container">
                <Issues />
            </div>
        </>
    )
}

export default IssuesApp;
