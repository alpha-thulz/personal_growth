import {Link} from "react-router";

export default function Error() {
    return (
        <>
            <div className="container">
                The page you requested does not exist!
                Let's <Link to={"/"}>try that again</Link>.
            </div>
        </>
    );
}