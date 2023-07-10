import React from "react";

export function MobileAppCard(props) {
    const { icon, title, desc } = props
    return (
        <div className="w-[18.125rem] rounded-[0.625rem] bg-white shadow-lg grid grid-cols-[5.625rem_1fr]">
            <img className="m-[1.375rem] w-[3.125rem] h-auto" src={icon}></img>
            <div className="text-primary font-bold text-2xl mt-[1.563rem] leading-7 mr-[1.375rem]">{title}</div>
            <div className="text-xl text-gray mx-[1.375rem] mt-[1.125rem] mb-[2.5rem] col-start-1 col-end-3">{desc}</div>
        </div>
    )
}