import React from "react";

const news = [
    {
        img: "./img/newimg.jpg",
        title: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        img: "./img/newimg.jpg",
        title: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        img: "./img/newimg.jpg",
        title: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        img: "./img/newimg.jpg",
        title: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        img: "./img/newimg.jpg",
        title: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        img: "./img/newimg.jpg",
        title: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    }
]


function BigNew(props) {
    const { img, title, desc } = props

    return (
        <div className="w-[39rem] border-r-[0.063rem] border-[#e9e9e9] absolute">
            <img className="w-[38rem] h-[21.375rem]" src={img} alt="news" />
            <h2 className="text-[1.546rem] font-bold text-primary mt-8 mb-4">{title}</h2>
            <p className="text-[1.203rem] text-gray">{desc}</p>
        </div>

    )
}

function SmallNew(props) {
    const { img, title, desc } = props

    return (
        <div className="border-b-[0.063rem] border-[#e9e9e9] mb-[1.875rem] ml-[39.938rem]">
            <div className="w-[35.063rem] flex flex-row mb-[0.938rem]">
                <img className="w-48 h-[6.75rem]" src={img} alt="news" />
                <div className="ml-[0.938rem]">
                    <h2 className="text-[0.915rem] font-bold text-primary mb-3">{title}</h2>
                    <p className="text-[0.711rem] text-gray">{desc}</p>
                </div>
            </div>
        </div>

    )
}

export function News() {

    return (
        <div className="h-[47.75rem]">
            <div className="text-center w-[75rem] grid grid-cols-[1fr_6.25rem] mx-auto mt-20">
                <span className="text-primary font-bold text-5xl pl-[6.25rem]">TIN TỨC</span>
                <a className="text-primary text-xl my-auto" href="#">Xem thêm &gt;</a>
            </div>
            <img className="mx-auto mb-[1.75rem]" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
            <div className="w-[75rem] mx-auto mb-24">
                {
                    news.map((item, index) => {
                        if (index % 4 === 0) {
      
                            return (
                                <BigNew key={index} img={item.img} title={item.title} desc={item.desc}/>
                            )
                        }
                        else {
                            return (
                                <SmallNew key={index} img={item.img} title={item.title} desc={item.desc} />
                            )
                        }
                    })
                }
            </div>
        </div>

    )
}