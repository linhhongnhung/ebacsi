import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
  };
  return (
      <Slider {...settings} className="mb-[2rem]">
        <div>
          <img className="w-full" src="./img/Banner 1 (1920x640).png" alt="banner-1" />
        </div>
        <div>
          <img className="w-full" src="./img/Banner 2 Tong dai.jpg" alt="banner-2" />
        </div>
      </Slider>
  );
}