import React from "react";
import { ServicePackCard } from "./service_pack_card/ServicePackCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";


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
        slidesToScroll: 1,
        className: "mb-10",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    className: "mb-10 w-[50rem] mx-auto"
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    className: "mb-10 w-[30rem] mx-auto"
                },
            },
        ]
    };
    return (
        <div className="w-[75rem] mx-auto bg-white xl:w-auto">
            <div className="text-center grid grid-cols-[1fr_6.25rem] mx-auto ">
                <span className="text-primary font-bold text-5xl pl-[6.25rem] lg:pl-0">SẢN PHẨM - DỊCH VỤ NỔI BẬT</span>
                <Link className="text-primary text-xl my-auto" to="/cac-goi-dich-vu-y-te">Xem thêm &gt;</Link>
            </div>
            <img className="mx-auto" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />

            <Slider {...settings} className="">
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