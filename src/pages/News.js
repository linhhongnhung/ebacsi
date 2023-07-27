import React from "react"
import { Header, Footer, BannerTitle, Topic } from "../components";

export default function News() {

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

    const medicalLength = medical.length;
    const eventLength = event.length;
    const mediaLength = media.length;

    const medicalDisplay = media.slice(medicalLength - 3, mediaLength);
    const eventDisplay = media.slice(eventLength - 3, eventLength);
    const mediaDisplay = media.slice(mediaLength - 3, mediaLength);

    medicalDisplay.reverse();
    eventDisplay.reverse();
    mediaDisplay.reverse();

    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="TIN TỨC" />
            <div className="mb-[5.813rem]">
                <div className="w-[75rem] mx-auto mb-[5.188rem]">
                    <Topic topicName="KIẾN THỨC Y TẾ" articleList={medicalDisplay} path="/kien-thuc-y-te" />
                </div>
                <div className="w-[75rem] mx-auto mb-[5.188rem]">
                    <Topic topicName="TIN TỨC - SỰ KIỆN" articleList={eventDisplay} path="/tin-tuc-su-kien" />
                </div>
                <div className="w-[75rem] mx-auto">
                    <Topic topicName="TRUYỀN THÔNG NÓI VỀ CHÚNG TÔI" articleList={mediaDisplay} path="/truyen-thong-noi-ve-chung-toi" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}