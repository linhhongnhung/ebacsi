import React from "react"
import { Header, Footer, BannerTitle, Intro } from "../components";
export default function Info() {
    return (
        <React.Fragment>
            <Header/>
            <BannerTitle title="GIỚI THIỆU"/>
            <Intro/>
            <Footer/>
        </React.Fragment>
    )
}