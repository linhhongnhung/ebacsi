import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom';

const NavModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex bg-opacity-75 z-[2] bg-primary">
      <div className="bg-white m-8 rounded-[1rem] shadow-lg w-full">
        <button className="bg-white rounded-tr-[1rem] hover:bg-primary float-right" onClick={onClose}>
          <i className="bx bx-x text-gray text-4xl hover:text-white p-3"></i>
        </button>

        <nav className="m-8">
          <ul className="flex flex-col">
            {tabList.map((item, index) => {
              return <TabItem key={index}
                content={item.text}
                url={item.url} />
            })}
            <Link to="#"><i className="bx bx-cart-alt text-primary text-3xl py-2 px-4 block hover:bg-grayEE"></i></Link>
            <div className="px-4 py-3 w-full hover:bg-grayEE">
              <div className="w-[3.125rem] h-[1.375rem] bg-[#eaeaea] rounded-[0.688rem] flex flex-row my-auto items-center justify-between">
                <img className="w-[1.125rem] h-[1.125rem] rounded-full ml-[0.2rem]" src="./img/language.jpg" />
                <p className="text-[0.781rem] font-bold">Vi</p>
                <div className="bx bx-chevron-down text-xs"></div>
              </div>
            </div>
          </ul>
        </nav>

      </div>
    </div>,
    document.getElementById('root')
  );
};

export default NavModal;

const TabItem = (props) => {
  const { content, url } = props
  return (
    <li className="text-primary text-xl font-bold w-full hover:bg-grayEE">
      <NavLink to={url} className="block py-2 px-4">
        {content}
      </NavLink>
    </li>
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