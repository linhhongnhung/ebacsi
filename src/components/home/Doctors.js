import React from "react";
import Slider from "react-slick";

const doctors = [
    {
        img: "/img/doctor1.png",
        name: "TS. BS. Nguyễn Văn Sĩ",
        major: "Chuyên khoa Tai - Mũi - Họng"
    },
    {
        img: "/img/doctor2.png",
        name: "TS. BS. Nguyễn Văn Sĩ",
        major: "Chuyên khoa Tai - Mũi - Họng"
    },
    {
        img: "/img/doctor1.png",
        name: "TS. BS. Nguyễn Văn Sĩ",
        major: "Chuyên khoa Tai - Mũi - Họng"
    }
]

export function Doctors() {

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="w-[75rem] mx-auto grid grid-cols-[1fr_49.75rem] mt-[4.5rem]">
            <div>
                <h1 className="font-bold text-primary text-5xl mb-1">ĐỘI NGŨ BÁC SĨ ƯU TÚ</h1>
                <img src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
            </div>
            <a className="text-primary my-auto ml-[43.4rem] text-xl" href="#">Xem thêm &gt;</a>
            <p className="text-gray text-2xl mt-12 mr-[2.875rem]">Đội ngũ bác sĩ ưu tú với thâm niên trung bình 10+ năm kinh nghiệm, hiện công tác tại các bệnh viện hàng đầu Việt Nam,
                thăm khám chuyên khoa đa dạng, tận tâm chăm sóc bạn và gia đình.
            </p>
            <Slider {...settings}>
                {
                    doctors.map(doctor => {
                        return (
                            <div className="mt-12 bg-white shadow-md rounded-[0.625rem] text-center mb-[5.875rem] !w-[24rem]" >
                                <img className="w-[21.875rem] mx-auto" src={doctor.img} />
                                <p className="text-primary text-[1.563rem] font-bold mt-10">{doctor.name}</p>
                                <p className="text-gray text-xl mb-[1.813rem]">{doctor.major}</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}