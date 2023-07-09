import React from "react";


// export interface CardProps {
//     img: string
//     name: string
//     desc: string
// }


export function ServicePackCard(props) {
    const { img, name, desc } = props
    return (
        <div className="w-[24.375rem] rounded-xl bg-white pb-2 shadow-lg mx-[0.469rem] mt-5">
            <img className="rounded-[0.313rem]" src={img}></img>
            <div>
                <div className="text-primary font-bold text-3xl m-6 leading-9"><a href="#">{name}</a></div>
                <div className="text-xl text-gray mx-6 mb-[2.375rem]">{desc}</div>
            </div>
        </div>
    )
}
