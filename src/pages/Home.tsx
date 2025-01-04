import {useEffect, useState} from "react";
import client from "../utils/connect.ts";
import Spinner from "../components/Spinner.tsx";
import BasicTable from "../components/BasicTable.tsx";
import dateFormat from "dateformat";
import Button from "../components/Button.tsx";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
       client.get("/users/alpha-thulz/repos")
           .then((response) =>  {
               setIsLoading(false);
               setData(response.data);
           })
           .catch((err) => {
               setIsLoading(false);
               console.error(err);
           });
    });

    return (
        <div className="container">
            {
                isLoading ?
                <Spinner /> :
                (
                    <div className="container-fluid">
                        <BasicTable headings={["Name", "Description", "Create at", "Updated at", "Language"]}>
                            {data?.map((item: {id: number, name:string, html_url:string, description: string, created_at:string, updated_at:string, language:string}) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{dateFormat(item.created_at, "HH:MM:ss ' - ' dd mmmm yyyy")}</td>
                                    <td>{dateFormat(item.updated_at, "HH:MM:ss ' - ' dd mmmm yyyy")}</td>
                                    <td>{item.language}</td>
                                    <td><Button label="View repo" onClick={() => window.open(item.html_url, "_blank")} /></td>
                                </tr>
                            ))}
                        </BasicTable>
                    </div>
                )
            }
        </div>
    );
}