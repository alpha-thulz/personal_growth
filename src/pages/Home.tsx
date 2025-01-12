import {useEffect, useState} from "react";
import client from "../utils/connect.ts";
import Spinner from "../components/Spinner.tsx";
import Button from "../components/Button.tsx";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
       client("").get("/users/alpha-thulz/repos")
           .then((response) =>  {
               setIsLoading(false);
               setData(response.data);
           })
           .catch((err) => {
               setIsLoading(false);
               console.error(err);
           });
    });

    const extractUrls = (text:string) => {
        if (!text) { return []}
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const matches = text.match(urlRegex);
        return matches || [];
    };
    
    return (
        <div className="container">
            {
                isLoading ?
                <Spinner /> :
                (
                    <div className="container-fluid">
                        {data?.map((item: {id: number, name:string, html_url:string, description: string, created_at:string, updated_at:string, language:string}) => (
                            <div className="card text-bg-dark text-center" style={{margin:5}}>
                                <div className="card-header">
                                    <h5>{item.name}</h5>
                                    <hr/>
                                    <blockquote className="blockquote-footer">{item.language}</blockquote>
                                </div>
                                <div className="card-body">
                                    <p>{item.description}</p>
                                    {(extractUrls(item.description).length !== 0) && (
                                        <Button label={"Live Demo"} onClick={() => window.open(extractUrls(item.description)[0], "_blank")} color={"info"} />
                                    )}
                                    <Button label="View repo" onClick={() => window.open(item.html_url, "_blank")} />
                                </div>
                                <div className="card-footer">
                                    {`Update on ${new Date(item.updated_at).toLocaleString()}`}
                                    <br/>
                                    {`Created on ${new Date(item.created_at).toLocaleString()}`}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}