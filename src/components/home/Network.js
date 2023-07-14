import React from "react";
import Slider from "react-slick";

const network = [
    {
        quantity: "36",
        type: "Bệnh viện",
        type2: ""
    },
    {
        quantity: "369",
        type: "Bác sĩ",
        type2: ""
    },
    {
        quantity: "986",
        type: "Nhân viên y tế",
        type2: "luôn sẵn sàng hỗ trợ"
    }
]

const imgs = [
    "./img/hospital/BV BUU DIEN TPHCM.png",
    "./img/hospital/DR.BINH.png",
    "./img/hospital/EBACSI.png",
    "./img/hospital/BV BUU DIEN TPHCM.png",
    "./img/hospital/DR.BINH.png",
]

export function Network() {

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="w-full h-auto pb-16" >
            <img src="./img/Banner 3.jpg" className="w-full absolute max-h-[43rem] h-full object-cover" alt="bg" />
            <div className="relative">
                <h1 className="text-center text-4xl text-white pt-[3.75rem]">Mạng lưới y tế <b>VNPT eBacsi</b> - Đặt lịch khám với:</h1>
                <img className="mx-auto mb-16 mt-2" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
                <div className="flex flex-row justify-between w-[75rem] mx-auto px-[6.25rem] font-bold">
                    {
                        network.map((item) => {
                            return (
                                <div className="text-white text-center">
                                    <p className="text-[5.774rem] h-28">{item.quantity}</p>
                                    <p className="text-[1.604rem]">{item.type}</p>
                                    <p className="text-[1.25rem] font-regular">{item.type2}</p>
                                </div>)
                        })
                    }
                </div>
                <Slider {...settings} className="mt-[3.25rem] w-[75rem] mx-auto mb-8">

                    {imgs.map(item => {
                        return (
                            <div className="bg-white !w-[18.047rem] rounded-[0.625rem]">
                                <img className="h-40 mx-auto" src={item} alt="hospital" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}
