import React from "react"
import { Link } from "react-router-dom";

export function TopicItem(props) {
    const { title, desc, img } = props
    return (
        <div className="border-b-[0.063rem] border-[#e9e9e9] mt-[2.188rem]">
            <div className="flex flex-row mb-6">
                <Link to="/article">
                    <div className="w-[21.5rem] h-[12.063rem] lg:w-auto lg:h-auto min-w-[6.5rem]">
                        <img className="w-full h-full rounded-t-[0.625rem] rounded-b-[0.313rem]" src={img} alt="news" />
                    </div>
                </Link>
                <div className="ml-10 md:ml-5">
                    <Link className="text-3xl text-primary font-bold mb-[1.125rem] hover:text-[#f68b1f] lg:text-xl" to="/article">{title}</Link>
                    <p className="text-[1.302rem] text-gray leading-7 lg:text-sm">{desc}</p>
                </div>
            </div>
        </div>
    )
}