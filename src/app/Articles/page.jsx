"use client";
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import style from './Articles.module.css'

export default function Articles() {

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

      const sliderRef = useRef(null);
 
      const [sliderReady, setSliderReady] = useState(false);
    
      useEffect(() => {
        if (sliderRef.current) {
          setSliderReady(true);
        }
      }, []);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
               <div>
               <button className='btn text-white me-2 rounded-5 bgColor' onClick={handlePrev}>&lt;</button>
               <button className='btn text-white  rounded-5 bgColor ' onClick={handleNext}>&gt;</button>
               </div>
                <div className={`${style.title}`}>
                    <h2> مقالاتنا الأخيرة </h2>
                    <p className='text-muted'> ابق على اطلاع بأحدث أفكارنا </p>
                </div>
            </div>
        </div>

        <div className="row">
            <Slider {...settings} ref={sliderRef}>
                <div className="col-md-4 p-3">
                    <div className={`${style.AllCaption}`}>
                        <div className={`${style.img}`}>
                            <img src="/img/a1.png" className='' alt="" />
                        </div>
                        <div className={`${style.caption} pt-3`}>
                            <p className={`${style.captionP}`}>محمد مو 20 أبريل 2024</p>
                            <h4> عنوان المدونة هنا </h4>
                            <p>إحدى الوظائف الأساسية لنظام نقاط البيع هي معالجة, تستخدم أنظمة نقاط البيع المتقدمة تقنية التشفير لحماية هذه البيانات من الوصول غير المصرح به.</p>
                            <div><span className='textColor'> اقرأ المزيد </span></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className={`${style.AllCaption}`}>
                        <div className={`${style.img}`}>
                            <img src="/img/a2.png" className='' alt="" />
                        </div>
                        <div className={`${style.caption} pt-3`}>
                            <p className={`${style.captionP}`}>محمد مو 20 أبريل 2024</p>
                            <h4> عنوان المدونة هنا </h4>
                            <p>إحدى الوظائف الأساسية لنظام نقاط البيع هي معالجة, تستخدم أنظمة نقاط البيع المتقدمة تقنية التشفير لحماية هذه البيانات من الوصول غير المصرح به.</p>
                            <span className='textColor'> اقرأ المزيد </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className={`${style.AllCaption}`}>
                        <div className={`${style.img}`}>
                            <img src="/img/a3.png" className='' alt="" />
                        </div>
                        <div className={`${style.caption} pt-3`}>
                            <p className={`${style.captionP}`}>محمد مو 20 أبريل 2024</p>
                            <h4> عنوان المدونة هنا </h4>
                            <p>إحدى الوظائف الأساسية لنظام نقاط البيع هي معالجة, تستخدم أنظمة نقاط البيع المتقدمة تقنية التشفير لحماية هذه البيانات من الوصول غير المصرح به.</p>
                            <span className='textColor'> اقرأ المزيد </span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    </>
  )
}
