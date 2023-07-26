import React from "react"
import { Link, useLocation } from "react-router-dom";
import { TopicItem } from "./TopicItem";


export function Topic(props) {

    const { topicName, articleList, path} = props
    
    return (
        <form className="flex flex-col">
            <div className="w-[75rem] h-[4.188rem] bg-primary text-center grid grid-cols-[1fr_11.875rem] mx-auto">
                <Link className="my-auto text-white font-bold text-4xl pl-[11.875rem]">{topicName}</Link>
                <Link className="my-auto text-2xl text-white" to={path}>Xem thêm »</Link>
            </div>
            {
                articleList.map((article, index) => {
                    return (
                        <TopicItem key={index} title={article.title} desc={article.desc} img={article.img} />
                    )
                })
            }
        </form>
    )
}