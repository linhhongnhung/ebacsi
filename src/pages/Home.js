import React, { Fragment } from "react";
import { Header, Banner, Services, MobileApp, Benefits, Network, Doctors, Feedbacks, News, Footer } from "../components";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Banner />
      <Services />
      <MobileApp />
      <Benefits />
      <Network />
      <Doctors />
      <Feedbacks />
      <News />
      <Footer />
    </div>
  );
}
