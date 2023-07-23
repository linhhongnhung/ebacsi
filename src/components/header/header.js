import React from "react";
import { NavLink } from 'react-router-dom';

const TabItem = (props) => {
  const { content, url } = props
    return (
      <li className="text-gray text-xl">
        <NavLink to={url} activeClassName="active">
          {content}
        </NavLink>
      </li>
    );
};

const TabList = [
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

export function Header() {
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
              {TabList.map((item, index) => {
                return <TabItem key={index} content={item.text} url={item.url}/>
              })}
            </ul>
            <a href="#" className="w-[1.375rem]"><i className="bx bx-cart-alt text-[#f68b1f]"></i></a>
          </nav>
        </div>
      </div>
    </header>
  );
}
