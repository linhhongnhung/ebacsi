import React from "react";
import Slider from "react-slick";

function QrCode() {
    return (
        <div className="flex flex-row w-[75rem] mx-auto justify-between absolute z-[1] xl:flex-col xl:w-full lg:px-6">
            <img className="rounded-[2rem] w-[55rem] h-auto border-solid border-[0.35rem] border-white drop-shadow-[0_35px_35px_rgba(108,201,254,1)] xl:mx-auto" src="/img/video.png" alt="video" />
            <div className="flex flex-col justify-center">
                <img className="w-[12.813rem] mx-auto xl:mt-16" src="/img/qrApp.png" alt="qr" />
                <p className="text-white font-bold text-3xl my-6 xl:mx-auto">Tải ứng dụng ngay!</p>
                <img className="w-[12.813rem] mx-auto mb-5" src="/img/Website---eBacsi---final---cut_77.png" alt="google play" />
                <img className="w-[12.813rem] mx-auto" src="/img/Website---eBacsi---final---cut_79.png" alt="app store" />
            </div>
        </div>
    )
}

function Rating(props) {

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= props.rating) {
            stars.push(<img className="w-[1.25rem] mx-1" src="./img/feedbacks/star_full.png" alt="full star"/>)
        }
        else if (props.rating % 1 !== 0) {
            stars.push(<img className="w-[1.25rem] mx-1" src="./img/feedbacks/star_half.png" alt="half star"/>)
            for (let j = 0; j < 5-i; i++) {
                stars.push(<img className="w-[1.25rem] mx-1" src="./img/feedbacks/star_empty.png" alt="empty star"/>)
            }
            break;
        }
        else {
            stars.push(<img className="w-[1.25rem] mx-1" src="./img/feedbacks/star_empty.png" alt="empty star"/>)
        }
    }

    return <div className="flex flex-row justify-center pb-9 mt-6">{stars}</div>
}

export function Feedbacks() {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <React.Fragment>
            <div className="w-[75rem] mx-auto xl:w-auto xl:items-center">
                <QrCode />
            </div>

            {/* Feedbacks */}
            <div className="bg-[url('../public/img/Banner4.jpg')] bg-cover w-full relative h-[63.125rem] mt-[17.25rem] xl:h-full">
                <div className="w-[62.75rem] mb-32 pt-[27.5rem] mx-auto relative xl:w-auto xl:px-8 xl:pt-[52rem] xl:pb-16">
                    <Slider {...settings}>
                        {feedbacks.map((feedback, index) => {
                            return (
                                <div className="mx-auto rounded-[1rem] text-center bg-gradient-to-b from-[#f68b1f] to-primary p-[0.32rem]">
                                    <div className="bg-white px-[4.375rem] rounded-[0.8rem] md:px-6">
                                        <h2 className="text-4xl text-primary pt-[1.875rem]">Khách hàng nói gì về <b>VNPT eBacsi</b></h2>
                                        <img className="mx-auto mt-1" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
                                        <img className="w-[11.938rem] mx-auto mb-[2.3rem] mt-6 rounded-full shadow-2xl border-2 border-white" src={feedback.avatar} alt="customer-avatar" />
                                        <p className="text-gray text-2xl leading-8">{feedback.comment}</p>
                                        <Rating keys={index} rating={feedback.rating} />
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

const feedbacks = [
    {
        avatar: "./img/feedbacks/customer1.jpg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        rating: "4.5"
    },
    {
        avatar: "./img/feedbacks/customer2.jpg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        rating: "5"
    },
    {
        avatar: "./img/feedbacks/customer3.jpg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
        rating: "4"
    },
]