import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Info, SupportContact, AllServices, ServiceDetail, News, OneTopic, Article } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Info />} />
        <Route path="/cac-goi-dich-vu-y-te" element={<AllServices />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/dang-ky-nhan-tu-van" element={<SupportContact />} />
        <Route path="/service-detail" element={<ServiceDetail/>}/>
        <Route path="/kien-thuc-y-te" element={<OneTopic/>}/>
        <Route path="/tin-tuc-su-kien" element={<OneTopic/>}/>
        <Route path="/truyen-thong-noi-ve-chung-toi" element={<OneTopic/>}/>
        <Route path="/article" element={<Article/>}/>
      </Routes>
    </Router>
  );
}

export default App;
