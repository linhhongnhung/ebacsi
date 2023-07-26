import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Info, SupportContact, AllServices, ServiceDetail } from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<Info />} />
        <Route path="/cac-goi-dich-vu-y-te" element={<AllServices />} />
        <Route path="/tin-tuc" element={<Info />} />
        <Route path="/dang-ky-nhan-tu-van" element={<SupportContact />} />
        <Route path="/service-detail" element={<ServiceDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
