import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';

const TabItem = (props) => {
  const { content, url, isSubMenuOpen, handleSubMenuHover, handleSubMenuLeave } = props
  if (content !== "CÁC GÓI DỊCH VỤ Y TẾ") {
    return (
      <li className="text-gray text-xl hover:text-primary hover:font-bold">
        <NavLink to={url} activeClassName="active">
          {content}
        </NavLink>
      </li>
    );
  }
  else {
    return (
      <li className="text-gray text-xl hover:text-primary hover:font-bold"
        onMouseEnter={handleSubMenuHover}
        onMouseLeave={handleSubMenuLeave}>
        <NavLink to={url} activeClassName="active">
          {content}
        </NavLink>
        <ul className={`submenu absolute bg-white mt-2 py-2 rounded-lg shadow-lg font-regular w-60 ${isSubMenuOpen ? "block" : "hidden"}`}>
          {services.map((item, index) => {
            return (
              <li key={index} className="text-gray hover:text-primary"><Link to={item.url} className="block px-4 py-2">{item.text}</Link></li>
            )
          })}
        </ul>
      </li>
    );
  }
};

export function Header() {

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuHover = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-[2] items-center bg-white h-[8.625rem] flex flex-row justify-center items-center">
      <div className="w-[75rem] flex flex-row justify-between">
        <NavLink to="/" activeClassName="active">
          <img src="/img/logo.png" alt="logo" />
        </NavLink>
        <div className="relative w-[57.688rem]">
          <nav className="flex flex-row justify-between absolute inset-x-0 bottom-0">
            <ul className="flex flex-row justify-between w-[49.125rem]">
              {tabList.map((item, index) => {
                return <TabItem key={index}
                  content={item.text}
                  url={item.url}
                  isSubMenuOpen={isSubMenuOpen}
                  handleSubMenuHover={handleSubMenuHover}
                  handleSubMenuLeave={handleSubMenuLeave} />
              })}
            </ul>
            <a href="#" className="w-[1.375rem]"><i className="bx bx-cart-alt text-[#f68b1f]"></i></a>
          </nav>
        </div>
      </div>
    </header>
  );
}

const tabList = [
  {
    text: "GIỚI THIỆU",
    url: "/gioi-thieu"
  },
  {
    text: "CÁC GÓI DỊCH VỤ Y TẾ",
    url: "/cac-goi-dich-vu-y-te"
  },
  {
    text: "TIN TỨC",
    url: "/tin-tuc"
  },
  {
    text: "ĐĂNG KÝ NHẬN TƯ VẤN",
    url: "/dang-ky-nhan-tu-van"
  },
]

const services = [
  {
    text: "Tất cả khói khám",
    url: "/cac-goi-dich-vu-y-te"
  },
  {
    text: "Gói khám 1",
    url: "/service-detail"
  },
  {
    text: "Gói khám 2",
    url: "/service-detail"
  },
  {
    text: "Gói khám 3",
    url: "/service-detail"
  },
  {
    text: "Gói khám 4",
    url: "/service-detail"
  },
  {
    text: "Gói khám 5",
    url: "/service-detail"
  }
]