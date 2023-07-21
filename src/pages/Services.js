import React from "react"
import { Header, Footer, BannerTitle, Pagination, ServicePackCard } from "../components";
const itemsPerPage = 10;
const totalItems = 50;

const goidvs = [
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "GÓI KHÁM SỨC KHỎE HẬU COVID-19",
        desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
    },
    {
        img: "https://ebacsi.com.vn/assets/img/goikham/hauCovid.jpg",
        name: "Gói chăm sóc sức khoẻ cho doanh nghiệp",
        desc: "Xét nghiệm kháng thể Covid-19 là xét nghiệm định lượng kháng thể ngừa virus Covid-19 trong máu",
    },
];


export default function Services() {
    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="CÁC GÓI DỊCH VỤ Y TẾ" />

            <div className="w-[75.938rem] mx-auto">
                <div className="flex items-center justify-between">
                    <div className="grid grid-cols-3">
                        {goidvs.map((goidv, index) => (
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

                <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} />
            </div>
            <Footer />
        </React.Fragment>
    )
}