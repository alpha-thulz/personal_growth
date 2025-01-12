import ListGroup from "../components/ListGroup.tsx";
import {Link} from "react-router";

export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="container-fluid">
                    <ListGroup heading="Contact">
                        <li className="list-group-item list-group-item-action list-group-flush"
                            onClick={() => (window.open(`mailto:tj.tyaphile@gmail.com?subject=Notice from Tenants Online`, "_blank"))}>Email</li>
                        <li className="list-group-item list-group-item-action list-group-flush"
                            onClick={() => (window.open('https://www.linkedin.com/in/thulani-tyaphile', "_blank"))}>LinkedIn</li>
                        <li className="list-group-item list-group-item-action list-group-flush"
                            onClick={() => (window.open('https://wa.me/27838430298?text=Message%20from%20Tenants%20Online', "_blank"))}>WhatsApp</li>
                    </ListGroup>
                </div>
                <hr/>
                <Link to={"/"}>Home</Link>
            </div>
        </>
    );
}