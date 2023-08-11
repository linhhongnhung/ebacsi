import React from "react";
import { Link, useLocation } from "react-router-dom";
import { animated } from 'react-spring';
import { useSlideUp } from "../../animations/SlideUp";

export function ServicePackCard(props) {
    const { img, name, desc, btn } = props
    const { ref, style: slideUp } = useSlideUp();

    const location = useLocation();
    const searchStringToReplace = '/cac-goi-dich-vu-y-te';
    const newString = '/service-detail';

    const updatedPath = location.pathname.replace(searchStringToReplace, newString);

    if (btn === true) {
        return (
            <animated.div
                ref={ref}
                style={slideUp}
                className="rounded-[0.313rem] bg-white pb-2 shadow-lg mx-[0.469rem] mt-5 md:pb-0">
                <img className="rounded-t-[0.313rem]" src={img}></img>
                <div>
                    <div className="text-primary font-bold text-3xl m-6 leading-9 md:text-2xl md:my-2"><Link to={updatedPath}>{name}</Link></div>
                    <div className="text-xl text-gray mx-6 mb-[2.375rem] md:text-sm md:mb-2">{desc}</div>
                </div>
                <div className="text-center text-primary mt-6 mb-[2.313rem] text-[1.918rem] font-bold xl:text-2xl" ><Link className="border-solid border-primary border-2 py-1 px-[3.125rem] rounded-[1.875rem] hover:bg-primary hover:text-white" to={updatedPath}>Xem thêm</Link></div>
            </animated.div>
        )
    }
    else {
        return (
            <div className="w-[24.375rem] rounded-[0.313rem] bg-white pb-2 shadow-lg mx-[0.469rem] mt-5 mb-[1.563rem] sm:w-[21rem]">
                <img className="rounded-t-[0.313rem]" src={img}></img>
                <div>
                    <div className="text-primary font-bold text-3xl m-6 leading-9"><Link to="/service-detail">{name}</Link></div>
                    <div className="text-xl text-gray mx-6 mb-[2.375rem]">{desc}</div>
                </div>
            </div>
        )
    }
}
