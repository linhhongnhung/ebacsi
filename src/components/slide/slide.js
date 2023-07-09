import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="mt-32">
      <div>
        <img src="./imgs/Banner 1 (1920x640).png" alt="banner-1" />
      </div>
      <div>
        <img src="./imgs/Banner 2 Tong dai.jpg" alt="banner-2" />
      </div>
    </Slider>
  );
}