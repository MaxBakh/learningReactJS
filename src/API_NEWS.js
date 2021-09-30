import { Button } from "@material-ui/core";
import React from "react";
import { API_URL } from "./API_Source";
import { NEWS_REQUEST_STATUS } from "./LES8/reducer_news";
import { newsReducer } from "./LES8/reducer_news";
import { fetchNews, setNewsList, setErrorStatus } from "./LES8/action";
import { useSelector, useDispatch } from "react-redux";



export default function News() {

    const [news, setNews] = React.useState([])

    // const loadData = () => {
    //     fetch(API_URL)
    //         .then((response) => {
    //             console.log("OK!")



    //             if (!response.ok || response.status !== 200) {
    //                 throw Error("!!!!!Error!!!!!")
    //             }

    //             return response.json()
    //         })

    //         .then((responseJson) => {
    //             console.log({ responseJson })


    //             setNews(responseJson)
    //         })
    //         .catch((err) => console.error("err", err))

    // }

    // const clearData = () => setNews([])

    // React.useEffect(() => {
    //     // loadData()
    // }, [])


    const { status, list } = useSelector((state) => state)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())

    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Loading...</p>
    }


    return <div>
        <p>News pages #1</p>
        <Button onClick={loadData}>Load Data</Button>
        <Button onClick={clearData}>Clear</Button>


        {status !== NEWS_REQUEST_STATUS.ERROR ? (
            <ol>
                {list.map((newsItem =>
                    <li key={newsItem.id}>
                        {newsItem.title}
                    </li>))}
            </ol>)
            : (
                <p style={{ color: 'red' }}>ERROR!!!</p>
            )}


    </div>
}