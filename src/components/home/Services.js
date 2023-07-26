import React from "react";
import { ServicePackCard } from "./service_pack_card/ServicePackCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const services = [
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh givà dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
    {
        img: "./img/services/hauCovid.jpg",
        name: "Gói khám sức khỏe Hậu COVID-19 (BV Bưu điện HCM)",
        desc: "-	Định nghĩa gói khám: Gói kiểm tra sức khỏe hậu Covid- điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19\n-	Địa chỉ: Bệnh viện Đa khoa Bưu điện TPHCM - Lô B9, Thành Thái, P.15, Q.10, TP. Hồ Chí Minh"
    },
]


export function Services() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="w-[75rem] mx-auto bg-white">
            <div className="text-center grid grid-cols-[1fr_6.25rem] mx-auto">
                <span className="text-primary font-bold text-5xl pl-[6.25rem]">SẢN PHẨM - DỊCH VỤ NỔI BẬT</span>
                <a className="text-primary text-xl my-auto" href="#">Xem thêm &gt;</a>
            </div>
            <img className="mx-auto" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />

            <Slider {...settings} className="mb-10">
                {
                    services.map((item, index) => {
                        return <ServicePackCard key={index} img={item.img} name={item.name} desc={item.desc}
                        />
                    })
                }
            </Slider>
        </div>
    )
}