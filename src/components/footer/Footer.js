import React from "react"
import { Link } from "react-router-dom";

const TabItem = (props) => {
    const { content, url } = props

    return (
        <div className="hover:font-bold md:py-2"> <Link to={url}>{content}</Link></div>
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

export function Footer() {
    return (
        <footer className="bg-[#005baa] text-white inset-x-0 bottom-0 items-center flex flex-row justify-center">


            <div className="w-[75rem] flex flex-row justify-between mb-[7.5rem] xl:flex-col xl:w-auto xl:mx-8">
                <div className="max-w-md mt-[3.75rem] w-[24.375rem] xl:w-auto">
                    <img src="./img/Website---eBacsi---final---cut_82.png" />
                    <h4 className="mt-[4.375rem] font-bold mb-[1.125rem] text-xl">TỔNG CÔNG TY TRUYỀN THÔNG (VNPT-MEDIA)</h4>
                    <span className="text-sm leading-8">GIẤY CHỨNG NHẬN ĐĂNG KÝ DOANH NGHIỆP SỐ: 0106873188 DO SỞ KH&ĐT HÀ NỘI CẤP NGÀY 12/06/2015
                    </span>
                </div>

                <div className="flex flex-col mt-[8.5rem] w-[46rem] xl:mt-8 md:w-auto">
                    <div className="flex flex-row justify-between text-xl md:flex-col">

                        {TabList.map((item, index) => {
                            return <TabItem key={index} content={item.text} url={item.url} />
                        })}


                    </div>
                    <div className="flex flex-row mt-20 justify-between mt-[3.75rem] md:flex-col">
                        <div className="md:mb-10">
                            <h4 className="font-bold mb-[1.125rem] text-xl">ĐIỀU KHOẢN VÀ CHÍNH SÁCH BẢO MẬT</h4>
                            <ul>
                                <li className="mb-2"> <a className="text-sm" href="#">Điều khoản hoạt động</a></li>
                                <li className="my-2"><a className="text-sm" href="#">Quy định thanh toán</a></li>
                                <li className="mt-2"><a className="text-sm" href="#">Chính sách bảo mật thông tin</a></li>


                            </ul>
                            <img className="mt-8" src="./img/dathongbao.png" />
                        </div>
                        <div className="">
                            <h4 className="font-bold mb-[1.125rem] text-xl">KẾT NỐI VỚI CHÚNG TÔI</h4>
                            <div className="icon-footer flex flex-row">
                                <a href="https://www.facebook.com/VNPT-eBacsi-104448552242601">
                                    <img src="./img/Website---eBacsi---final---cut_86.png" className="mr-2" />
                                </a>
                                <a href="https://www.instagram.com">
                                    <img className="mx-2" src="./img/Website---eBacsi---final---cut_88.png" />
                                </a>
                                <a href="https://www.youtube.com">
                                    <img className="mx-2" src="./img/Website---eBacsi---final---cut_90.png" />
                                </a>
                            </div>
                            <img className="mt-[3.625rem]" src="./img/Website---eBacsi---final---cut_96.png" />
                        </div>
                    </div>


                </div>

            </div>


        </footer>

    )
}
