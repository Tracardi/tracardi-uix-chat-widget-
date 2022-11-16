import * as rssParser from 'react-native-rss-parser';
import React, {useEffect, useState} from "react";

function FeedList({feed}) {

    if(!feed) {
        return "No feed"
    }

    return feed.map((item, key) => {
        return <div key={key}>
            <div>{item.title}</div>
            <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </div>
    })
}

export default function Rss() {

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetch('https://rss.app/feeds/4IYdTMZjEtYCCLVt.xml')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                setFeed(rss)
            });
    }, [])

    return <FeedList feed={feed.items}/>
}

