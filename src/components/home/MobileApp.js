import React from "react";
import { MobileAppCard } from "./mobile_app_card/MobileAppCard";

const features = [
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

    return (
        <React.Fragment>
            <div className="bg-white h-[2.438rem] w-[85rem] mx-auto z-[1]">
                <img className="w-[21.938rem] h-auto absolute z-[1]" src="/img/Iphone.png" />
            </div>
            <div className="w-auto mb-32 bg-[url('../public/img/Banner2.jpg')] bg-cover pb-16">
                <div className="w-[85rem] rounded-xl pb-2 grid grid-cols-[21.938rem_1fr] grid-rows-[6.5rem_1fr] mx-auto flex flex-col relative xl:w-auto lg:grid-cols-1 xl:mx-4">
                    <img className="w-[21.938rem] h-auto row-start-1 row-end-3" src="" />
                    <p className="text-white text-4xl text-center my-auto lg:mt-[35rem]"> <b>VNPT eBacsi</b> - Chăm sóc sức khoẻ toàn diện mọi lúc mọi nơi</p>
                    <div className="flex justify-center">
                        <div className="w-[56rem] grid grid-cols-3 gap-[0.938rem] mobile-app-grid xl:w-auto xl:mt-16">
                            {
                                features.map((item, index) => {
                                    return <MobileAppCard key={index} icon={item.icon} title={item.title} desc={item.desc}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}