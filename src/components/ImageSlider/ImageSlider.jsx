import React, { Component } from "react";
import Slider from "react-slick";
import './ImageSlider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageSlider() {
  return (
    <div id='imageSlider'>
      <SimpleSlider />
    </div>
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div id='carousel'>
        <Slider {...settings}>
          <div>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
          <div>
            <img src="/images/slider-badag.jpg" alt="" />
          </div>
          <div>
            <img src="/images/slider-scale.jpg" alt="" />
          </div>
          <div>
            <img src="/images/slider-scales.jpg" alt="" />
          </div>
          <div>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
          <div>
            <img src="/images/slider-badging.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
