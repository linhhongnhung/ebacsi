import React from "react"
export function BannerTitle(props) {
    return (
        <div className="h-[20rem] md:h-auto">
            <div className="relative bg-[url('../public/img/Banner2.jpg')] h-full flex flex-col justify-center items-center">
                <h1 className="text-center text-[4.167rem] text-white pt-[3.75rem] font-bold md:text-[1.5rem]">{props.title}</h1>
                <img className="mb-16 mt-2" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
            </div>
        </div>
    )
}