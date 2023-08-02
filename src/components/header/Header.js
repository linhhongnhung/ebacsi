import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import NavModal from './NavModal'

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
        <NavLink to={url} activeClassName="active" className="pb-2">
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

  // handle open/close submenu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleSubMenuHover = () => {
    setIsSubMenuOpen(true);
  };
  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  // handle click menu
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <header
      className="fixed inset-x-0 top-0 z-[2] items-center bg-white h-[8.625rem] flex flex-row justify-center items-center lg:h-[6rem]">
      <div className="w-[75rem] flex flex-row justify-between xl:px-12">

        <NavLink to="/" activeClassName="active">
          <img className="lg:h-16" src="/img/logo.png" alt="logo" />
        </NavLink>

        <div className="relative w-[57.688rem] xl:hidden">
          <nav className="flex flex-row justify-between absolute inset-x-0 bottom-0 h-6">

            <ul className="flex flex-row justify-between w-[49.125rem]">
              {tabList.map((item, index) => {
                return <TabItem key={index}
                  content={item.text}
                  url={item.url}
                  isSubMenuOpen={isSubMenuOpen}
                  handleSubMenuHover={handleSubMenuHover}
                  handleSubMenuLeave={handleSubMenuLeave} />
              })}
              <Link to="#"><i className="bx bx-cart-alt text-[#f68b1f] text-3xl hover:text-primary"></i></Link>
              <div className="w-[3.125rem] h-[1.375rem] bg-[#eaeaea] rounded-[0.688rem] flex flex-row my-auto items-center justify-between pl">
                <img className="w-[1.125rem] h-[1.125rem] rounded-full ml-[0.2rem]" src="./img/language.jpg" />
                <p className="text-[0.781rem] font-bold">Vi</p>
                <div className="bx bx-chevron-down text-xs"></div>
              </div>
            </ul>

          </nav>
        </div>

        {/* Responsive */}
        <div className="relative hidden my-auto xl:block">
          <button onClick={openModal}>
            <i className="bx bx-menu text-gray hover:text-primary text-5xl"></i>
          </button>
          <NavModal isOpen={isModalOpen} onClose={closeModal}>
          </NavModal>
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