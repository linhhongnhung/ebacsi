import React from "react"
import { Link } from "react-router-dom";
import { Header, Footer, BannerTitle, Topic } from "../components";

export default function Article() {
    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="TIN TỨC" />

            <Footer />
        </React.Fragment>
    )
}