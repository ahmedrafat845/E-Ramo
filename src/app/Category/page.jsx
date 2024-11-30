"use client";
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import style from './Category.module.css';

export default function Category() {
  const sliderRef = useRef(null);
  const [sliderReady, setSliderReady] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderReady(true);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderReady && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderReady && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 pb-4 d-flex justify-content-between align-items-center">
        <div>
            <button
              className="btn text-white me-2 rounded-5 bgColor"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="btn text-white rounded-5 bgColor next-btn"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
          <h3 className={`${style.categoryName} text-end`}>تسوق حسب الفئات</h3>
          
        </div>
        <Slider {...settings} ref={sliderRef}>
          {[
            { src: "/img/clothes.png", name: "الملابس" },
            { src: "/img/products.png", name: "البقاله" },
            { src: "/img/home.png", name: "المنزل الذكي" },
            { src: "/img/phones.png", name: "الجولات ومستلمزامتها" },
          ].map((item, index) => (
            <div key={index} className="col-md-3">
              <div className={`${style.category}   text-center`}>
                <img
                  className={`${style.imageResponsive} m-auto`}
                  src={item.src}
                  alt={item.name}
                />
                <h5 className={`${style.categoryName}`}>{item.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
