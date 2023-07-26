import React from "react";
import { Header, Footer, BannerTitle, ServiceDetailContent } from "../components";

export default function ServiceDetail() {
    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="CÁC GÓI DỊCH VỤ Y TẾ" />

            <ServiceDetailContent/>

            <Footer />
        </React.Fragment>
    )
}
