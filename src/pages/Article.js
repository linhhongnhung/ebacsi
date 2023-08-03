import React from "react"
import { Link } from "react-router-dom";
import { Header, Footer, BannerTitle, RcmArticle } from "../components";
import Slider from "react-slick";

const rcmArticles = [
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    },
    {
        img: "./img/newimg.jpg",
        title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        path: "/article"
    }
]

const articleAmount = rcmArticles.length;
const topRcmArticles = rcmArticles.slice(articleAmount - 3, articleAmount)

export default function Article() {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    className: "mb-10 w-[60rem] mx-auto"
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    className: "mb-10 w-[42rem] mx-auto",
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                    className: "mb-10 w-[20rem] mx-auto",
                    autoplaySpeed: 4000,
                },
            },
        ]
    };

    return (
        <React.Fragment>
            <Header />
            <BannerTitle title="TIN TỨC" />
            <div className="w-[75rem] mx-auto mb-60 pt-[3.75rem] xl:w-auto xl:px-5">
                <h1 className="text-5xl font-bold text-primary md:text-2xl">ĐỪNG LẠM DỤNG CHỤP X-QUANG PHỔI HẬU COVID-19</h1>
                <img className="mb-6 mt-[0.125rem]" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />

                {
                    topRcmArticles.map(item => {
                        const titleUpperCase = item.title.toUpperCase();
                        return (
                            <div className="text-[1.302rem] text-gray border-b-[0.063rem] border-[#e9e9e9] py-2 hover:text-[#f68b1f] hover:font-bold md:text-xl"><Link>{titleUpperCase}</Link></div>
                        )
                    })
                }
                <p className="text-[1.302rem] mt-7 leading-7 md:text-xl">
                    <b className="text-[1.563rem] md:text-[1.15rem]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br /></b>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.<br />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                <div className="my-11">
                    <img className="w-[60rem] h-[33.75rem] mx-auto rounded-[0.625rem] xl:w-auto xl:h-auto" src="./img/newimg.jpg" alt="info" />
                    <p className="text-[1.563rem] text-center mt-[1.4rem] md:text-[1.15rem]">Lorem ipsum dolor sit amet, consectetur Risusn lacus vel facilisis</p>
                </div>
                <p className="text-[1.302rem] md:text-xl">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <p className="text-[1.302rem] font-bold text-right leading-9 xl:text-xl">
                    Coluptatem<br />
                    Sit voluptatem accusantium
                </p>
                <div className="w-[75.938rem] mb-[14.813rem] mt-[6.25rem] xl:w-auto">
                    <Slider {...settings} className="mb-10">
                        {
                            rcmArticles.map((item, index) => {
                                return <RcmArticle key={index} img={item.img} title={item.title} desc={item.desc} path={item.path}
                                />
                            })
                        }
                    </Slider>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}