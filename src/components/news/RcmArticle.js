import React from "react";
import { Link } from "react-router-dom";

export function RcmArticle(props) {
    const { img, title, desc, path } = props
    return (
        <div className="mx-[0.469rem] rounded-[0.313rem] mb-4 shadow-lg">
            <img src={img} className="w-[24.375rem] h-[14.24rem]" />
            <div className="mx-5">
                <div className="my-5">
                    <Link className="text-primary font-bold text-[1.563rem] leading-7">{title}</Link>
                </div>
                <p className="text-[1.042rem] text-gray leading-5 mb-5">{desc}</p>
                <div className="pb-9">
                    <Link className="text-[1.042rem] text-primary font-bold" to={path}>Xem thêm »</Link>
                </div>
            </div>
        </div>
    )
}