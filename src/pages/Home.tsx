import {useEffect, useState} from "react";
import client from "../utils/connect.ts";
import Spinner from "../components/Spinner.tsx";
import ListGroup from "../components/ListGroup.tsx";

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
                        <h1>Home Page</h1>
                        <ListGroup heading="My Public GitHub repos">
                            {data.map((item: {id:number, name:string, html_url:string}) => (
                                <li
                                    key={item.id}
                                    className={"list-group-item"}
                                    onClick={() => window.open(item.html_url, "_blank")}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ListGroup>
                    </div>
                )
            }
        </div>
    );
}