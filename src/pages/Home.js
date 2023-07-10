import React from "react";
import { Header, Banner, Services, MobileApp, Benefits, Network, Doctors, Feedbacks, News, Footer } from "../components";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Services />
      <MobileApp/>
      <Benefits/>
      <Network/>
      <Doctors/>
      <Feedbacks/>
      <News/>
      <Footer />
    </React.Fragment>
  );
}
