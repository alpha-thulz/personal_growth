import {ReactNode} from "react";
import {Table} from "react-bootstrap";

interface BasicTableProps {
    headings: string[];
    children: ReactNode
}

export default function BasicTable({ headings, children }: BasicTableProps) {
    return (
        <>
            <Table>
                <thead>
                <tr>
                    {headings.map(heading => (<th key={heading}>{heading}</th>))}
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </Table>
        </>
    );
}