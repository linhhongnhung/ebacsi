import React, { useState } from "react"
import { Header, Footer, BannerTitle, Topic } from "../components";
import {useLocation } from "react-router-dom";
import Pagination from "../components";

export default function OneTopic() {


    const medical = [
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        }
    ]

    const event = [
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        }
    ]

    const media = [
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Sắp triển khai cấp hộ chiếu vaccine điện tử trên toàn quốc",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Tiêm vaccine phòng Covid-19 cho trẻ từ 5 - dưới 12 tuổi",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        },
        {
            title: "Đừng lạm dụng chụp x-quang phổi hậu Covid-19",
            desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            img: "./img/newimg.jpg"
        }
    ]


    medical.reverse();
    event.reverse();
    media.reverse();

    let topicName = "";
    let articleList = [];

    const path = useLocation().pathname;
    const index = path.lastIndexOf("/");
    const lastPath = path.substring(index, path.length);

    if (lastPath === "/kien-thuc-y-te") {
        topicName = "KIẾN THỨC Y TẾ";
        articleList = medical;
    }
    else if (lastPath === "/tin-tuc-su-kien") {
        topicName = "TIN TỨC - SỰ KIỆN";
        articleList = event;
    }
    else {
        topicName = "TRUYỀN THÔNG NÓI VỀ CHÚNG TÔI";
        articleList = media;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = articleList.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="TIN TỨC" />
            <div className="mb-[5.625rem] mt-16">
                <div className="w-[75rem] mx-auto mb-[1.875rem] xl:w-auto px-4">
                    <Topic topicName={topicName} articleList={currentItems} path={lastPath} />
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(articleList.length / itemsPerPage)}
                    onPageChange={onPageChange} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}