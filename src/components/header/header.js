import React from "react";

const TabItem = (props) => {
  const { content } = props

  return (
    <li className="text-gray text-xl">
      <a href="gioi-thieu.html">{content}</a>
    </li>
  );
};

const TabList = [
  {
    text: "GIỚI THIỆU"
  },
  {
    text: "CÁC GÓI DỊCH VỤ Y TẾ"
  },
  {
    text: "TIN TỨC"
  },
  {
    text: "ĐĂNG KÝ NHẬN TƯ VẤN"
  },
]

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-[1] items-center bg-white h-[8.625rem] flex flex-row justify-center items-center"
    >
      <div className="w-[75rem] flex flex-row justify-between">
        <a href="index.html">
          <img src="/img/logo.png" alt="logo" />
        </a>
        <div className="relative w-[57.688rem]">
          <nav className="flex flex-row justify-between absolute inset-x-0 bottom-0">
            <ul className="flex flex-row justify-between w-[49.125rem]">
              {TabList.map((item, index) => {
                return <TabItem key={index} content={item.text} />
              })}
            </ul>


            <a href="#" className="w-[1.375rem]"><i className="bx bx-cart-alt text-[#f68b1f]"></i></a>
          </nav>
        </div>

      </div>
    </header>
  );
}
