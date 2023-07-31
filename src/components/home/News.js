import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

let news = [
    {
        img: "./img/newimg.jpg",
        title: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        path: "/article"
    }
]

let newsDisplay = news.slice(news.length - 4, news.length)
newsDisplay.reverse()

function BigNew(props) {
    const { img, title, desc, path } = props

    return (
        <div className="w-[39rem] border-r-[0.063rem] border-[#e9e9e9] absolute xl:w-[33rem]">
            <Link to={path}>
                <div className="w-[38rem] h-[21.375rem]">
                    <img className="w-[38rem] h-[21.375rem] xl:w-[32rem]" src={img} alt="news" />
                </div>
            </Link>
            <div className="mt-8 mb-4">
                <Link className="text-[1.546rem] font-bold text-primary" to={path}>{title}</Link>
            </div>
            <p className="text-[1.203rem] text-gray">{desc}</p>
        </div>

    )
}

function SmallNew(props) {
    const { img, title, desc, path } = props

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth >= 980) {
        return (
            <div className="border-b-[0.063rem] border-[#e9e9e9] mb-[1.875rem] ml-[39.938rem] xl:w-auto xl:ml-[33.938rem]">
                <div className="w-[35.063rem] flex flex-row mb-[0.938rem] xl:w-auto">
                    <Link to={path}>
                        <div className="w-48 h-[6.75rem]">
                            <img className="w-48 h-[6.75rem]" src={img} alt="news" />
                        </div>
                    </Link>
                    <div className="ml-[0.938rem]">
                        <Link className="text-[0.915rem] font-bold text-primary mb-3" to={path}>{title}</Link>
                        <p className="text-[0.711rem] text-gray">{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="border-b-[0.063rem] border-[#e9e9e9] mb-[1.875rem]">
                <div className="w-[35.063rem] flex flex-row mb-[0.938rem] xl:w-auto ">
                    <Link to={path}>
                        <div className="w-48 h-[6.75rem] sm:w-auto sm:h-auto">
                            <img className="w-48 h-[6.75rem] sm:w-auto sm:h-auto" src={img} alt="news" />
                        </div>
                    </Link>
                    <div className="ml-[0.938rem] ">
                        <Link className="text-[0.915rem] font-bold text-primary mb-3" to={path}>{title}</Link>
                        <p className="text-[0.711rem] text-gray">{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export function News() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="pb-[5.625rem] xl:px-4">
            <div className="text-center w-[75rem] grid grid-cols-[1fr_6.25rem] mx-auto mt-20 xl:w-auto">
                <span className="text-primary font-bold text-5xl pl-[6.25rem]">TIN TỨC</span>
                <div className="my-auto">
                    <Link className="text-primary text-xl" to="/tin-tuc">Xem thêm &gt;</Link>
                </div>
            </div>
            <img className="mx-auto mb-[1.75rem]" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
            <div className="w-[75rem] mx-auto mb-24 xl:w-auto">
                {
                    newsDisplay.map((item, index) => {
                        if (index % 4 === 0 && windowWidth >= 980) {
                            return (
                                <BigNew key={index} img={item.img} title={item.title} desc={item.desc} path={item.path} />
                            )
                        }
                        else {
                            return (
                                <SmallNew key={index} img={item.img} title={item.title} desc={item.desc} path={item.path} />
                            )
                        }
                    })

                }
            </div>
        </div>
    )
}