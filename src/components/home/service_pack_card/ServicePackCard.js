import React from "react";


// export interface CardProps {
//     img: string
//     name: string
//     desc: string
// }


export function ServicePackCard(props) {
    const { img, name, desc, btn } = props
    if (btn === true){
        return (
            <div className="rounded-[0.313rem] bg-white pb-2 shadow-lg mx-[0.469rem] mt-5">
                <img className="rounded-t-[0.313rem]" src={img}></img>
                <div>
                    <div className="text-primary font-bold text-3xl m-6 leading-9"><a href="#">{name}</a></div>
                    <div className="text-xl text-gray mx-6 mb-[2.375rem]">{desc}</div>
                </div>
                <div className="text-center text-primary mt-6 mb-[2.313rem] text-[1.918rem] font-bold" ><a className="border-solid border-primary border-2 py-1 px-[3.125rem] rounded-[1.875rem] hover:bg-primary hover:text-white" href="#">Xem thêm</a></div>
            </div>
        )
    }
    else{
        return (
            <div className="w-[24.375rem] rounded-[0.313rem] bg-white pb-2 shadow-lg mx-[0.469rem] mt-5 mb-[1.563rem]">
                <img className="rounded-t-[0.313rem]" src={img}></img>
                <div>
                    <div className="text-primary font-bold text-3xl m-6 leading-9"><a href="#">{name}</a></div>
                    <div className="text-xl text-gray mx-6 mb-[2.375rem]">{desc}</div>
                </div>
            </div>
        )
    }
}
