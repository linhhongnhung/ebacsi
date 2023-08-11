import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Info, SupportContact, AllServices, ServiceDetail, News, OneTopic, Article } from "./pages"
import Layout from "./components/layout/Layout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<Info />} />
          <Route path="/cac-goi-dich-vu-y-te" element={<AllServices />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/dang-ky-nhan-tu-van" element={<SupportContact />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/kien-thuc-y-te" element={<OneTopic />} />
          <Route path="/tin-tuc-su-kien" element={<OneTopic />} />
          <Route path="/truyen-thong-noi-ve-chung-toi" element={<OneTopic />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Layout>
    </Router >
  );
}

export default App;
