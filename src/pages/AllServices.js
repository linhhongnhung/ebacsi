import React, { useState } from "react";
import { Header, Footer, BannerTitle, ServicePackCard } from "../components";
import Pagination from "../components";

export default function AllServices() {

    const goidvs = [
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "1Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "2Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "3GÓI KHÁM SỨC KHỎE HẬU COVID-19",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "4Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "5Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "6Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "7Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "8Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "9Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "10GÓI KHÁM SỨC KHỎE HẬU COVID-19",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "11Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "12Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "13Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "14Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "15Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "16Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "17GÓI KHÁM SỨC KHỎE HẬU COVID-19",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "18Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "19Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "20Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
        {
            img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
            name: "21Gói chăm sóc sức khoẻ cho doanh nghiệp",
            desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = goidvs.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="CÁC GÓI DỊCH VỤ Y TẾ" />

            <div className="w-[75.938rem] mx-auto xl:w-auto">
                <div className="flex items-center justify-between">
                    <div className="grid grid-cols-3 all-services-grid">
                        {currentItems.map((goidv, index) => (
                            <ServicePackCard
                                key={index}
                                img={goidv.img}
                                name={goidv.name}
                                desc={goidv.desc}
                                btn={true}
                            />
                        ))}
                    </div>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(goidvs.length / itemsPerPage)}
                    onPageChange={onPageChange} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}