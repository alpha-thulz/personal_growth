import {ReactNode} from "react";

interface ListGroupProps {
    heading?: string;
    children: ReactNode;
    className?: string;
}

export default function ListGroup({heading, children, className}: ListGroupProps) {
    return (
        <div className={className}>
            <h3>{heading}</h3>
            <ul className={"list-group"}>
                {children}
            </ul>
        </div>
    );
}