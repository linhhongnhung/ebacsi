import React from "react"
export function BannerTitle(props) {
    return (
        <div className="mt-[8.625rem]">
            <img className="w-full absolute max-h-[19.938rem] object-cover" src="./img/Banner 2.jpg" alt="banner" />
            <div className="relative pt-16">
                <h1 className="text-center text-[4.167rem] text-white pt-[3.75rem] font-bold">{props.title}</h1>
                <img className="mx-auto mb-16 mt-2" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
            </div>
        </div>
    )
}