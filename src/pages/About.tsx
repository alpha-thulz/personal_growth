import ListGroup from "../components/ListGroup.tsx";
import {Link} from "react-router";

export default function About() {
    return (
        <div className="container">
            <div className="container-fluid">
                <h3>What is this?</h3>
                <p>
                    So first and foremost, this is not a website where I am planning to sell a few products and probably drive traffic in order to monetize it.
                    But I have purchased this domain in order to publish my projects as I learn new technologies and also have it available for anyone else willing to partake in
                    what I have publish, there sole reasons for this are as follows:
                </p>

                <ListGroup className="mb-3" heading="Reasons to make this readily available">
                    <li className={"list-group-item"}>Practise Web development</li>
                    <li className={"list-group-item"}>Solidify backend skills</li>
                    <li className={"list-group-item"}>Have ready setup environment to practise QA automation</li>
                    <li className={"list-group-item"}>Have ready available endpoints to practise API testing</li>
                </ListGroup>

                <p>
                    All live projects will be published on the <Link to={"/"} >home page</Link> with easily accessible click to website.
                    One this to note though, all the demo websites will automatically shutdown when not in use to help save on costs personally, however they will will automatically
                    start up when the specific site is accessed, startup time differ from <strong>5 seconds to 20 seconds</strong> just in case you may be interest testing your skills
                    too.
                </p>
                <p>
                    Also another this, if the server shuts down, all information will be deleted even though database is implemented, however I have decided to not retain any information
                    as the information is not intended to personally identified each individual user, in the event you decide to enter personal information do not worry, nothing will be
                    retained and passwords are encrypted using BCrypt and they are not included in any payload response from the server.
                </p>
                <p>
                    With that, I bid you farewell, and happy hunting in case you may opt to hunt for any bugs, one thing to not, the server development have more features that the front-end
                    there is a documentation as well provided, some bugs are intentionally left there, some are not. In the event you feel like a bug should be fixed in order to help
                    with solidifying your testing skills too, do not hesitate to contact me on any of the contact details provided <Link to={"/contact"} >here</Link>.
                </p>
                <p>
                    I know all this time all I have been saying is <strong>"I"</strong>, however I am open to contributions and change the "I" to we or team
                </p>
                <ListGroup className="mb-3">
                    <li className={"list-group-item"} onClick={() => (window.open("https://istqb.patshala.com/tests/", "_blank"))}>Practise QA</li>
                    <li className={"list-group-item"} onClick={() => (window.open("https://tryqa.com/istqb-dumps-download-mock-tests-and-sample-question-papers/", "_blank"))}>
                        Download mock tests and sample-question paper
                    </li>
                </ListGroup>
            </div>
        </div>
    );
}