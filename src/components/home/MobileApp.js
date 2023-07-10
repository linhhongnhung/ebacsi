import React from "react";
import { MobileAppCard } from "./mobile_app_card/MobileAppCard";

const services = [
    {
        icon: "./img/Website---eBacsi---final---cut_27.png",
        title: "Đăng ký khám online",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        icon: "./img/Website---eBacsi---final---cut_30.png",
        title: "Hỏi đáp với Bác sĩ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        icon: "./img/Website---eBacsi---final---cut_32.png",
        title: "Khám trực tuyến với Bác sĩ mọi lúc, mọi nơi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        icon: "./img/Website---eBacsi---final---cut_37.png",
        title: "Quản lý hồ sơ, sức khoẻ cho bản thân và gia đình",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        icon: "./img/Website---eBacsi---final---cut_38.png",
        title: "Tìm kiếm cơ sở y tế ngay gần bạn",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
        icon: "./img/Website---eBacsi---final---cut_39.png",
        title: "Cập nhật các tin tức y tế chính thống",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
]

export function MobileApp() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <div className="bg-white h-[2.438rem] w-[85rem] mx-auto">
                <img className="w-[21.938rem] h-auto absolute" src="/img/Iphone.png" />
            </div>
            <div className="bg-[url('/img/Banner 2.jpg')] bg-cover bg-center w-full bg-[#185bc9]">
                <div className="w-[85rem] rounded-xl pb-2 grid grid-cols-[21.938rem_1fr] grid-rows-[6.5rem_1fr] mx-auto flex flex-col">
                    <img className="w-[21.938rem] h-auto row-start-1 row-end-3" src="" />
                    <p className="text-white text-4xl text-center my-auto"> <b>VNPT eBacsi</b> - Chăm sóc sức khoẻ toàn diện mọi lúc mọi nơi</p>
                    <div className="w-[56rem] grid grid-cols-3 mx-auto gap-[0.938rem]">
                        {
                            services.map((item, index) => {
                                return <MobileAppCard key={index} icon={item.icon} title={item.title} desc={item.desc}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}