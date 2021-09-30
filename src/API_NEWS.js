import { Button } from "@material-ui/core";
import React from "react";
import { API_URL } from "./API_Source";


export default function News() {

    const [news, setNews] = React.useState([])

    const loadData = () => {
        fetch(API_URL)
            .then((response) => {
                console.log("OK!")



                if (!response.ok || response.status !== 200) {
                    throw Error("!!!!!Error!!!!!")
                }

                return response.json()
            })

            .then((responseJson) => {
                console.log({ responseJson })


                setNews(responseJson)
            })
            .catch((err) => console.error("err", err))

    }

    // const clearData = () => []

    React.useEffect(() => {
        // loadData()
    }, [])

    return <div>
        <p>News pages #1</p>

        <ol>
            {news.map((newsItem =>
                <li key={newsItem.id}>
                    {newsItem.title}
                </li>))}
        </ol>

        <Button onClick={loadData}>Load Data</Button>
        {/* <Button onClick={clearData}>Clear</Button> */}
    </div>
}