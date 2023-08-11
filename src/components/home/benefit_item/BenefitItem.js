import React from "react";
import { animated } from 'react-spring';
import { useSlideUp } from "../../animations/SlideUp";

export function BenefitItem(props) {

    const { ref, style: slideUp } = useSlideUp();

    const { img, text } = props
    return (
        <animated.div
            className="rounded-[0.625rem] bg-white shadow-lg flex flex-col justify-items-center h-80 text-center border-transparent border-4 hover:border-[#f68b1f] max-w-[25rem]"
            ref={ref}
            style={slideUp}>
            <img className="px-24" src={img} />
            <p className="font-bold text-[1.302rem] text-primary px-[1.375rem] pt-2 hover:text-[#f68b1f]">{text}</p>
        </animated.div>
    )
}