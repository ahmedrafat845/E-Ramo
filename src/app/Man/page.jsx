"use client";
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import style from "./Man.module.css";


export default function Man() {

    const sliderRef = useRef(null);
 
    const [sliderReady, setSliderReady] = useState(false);
  
    useEffect(() => {
      if (sliderRef.current) {
        setSliderReady(true);
      }
    }, []);

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




  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="container mt-5 pt-5">
      <Slider {...settings}  ref={sliderRef}>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className={`${style.leftSide}`}>
                <div className={`${style.allRating} ms-5`}>
                  <div className={`${style.rating} mb-5 pb-2 me-2`}>
                    <span>
                      <img src="/img/Group.svg" alt="" />
                    </span>
                    <span>التقييمات</span>
                  </div>
                  <div className={`${style.stars}`}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star px-3"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star px-3"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className={`${style.leftSideCaptio}`}>
                  <h3>محمد مصطفي</h3>
                  <span>طالب ثانوي</span>
                  <p className="pt-4">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                    النص أو العديد من النصوص الأخرى.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${style.rightSide} overflow-hidden`}>
                <div className={`${style.manPhoto} pt-5 mt-5`}>
                  <div className={`${style.rightCaption} float-end p-4 mt-5`}>
                    <p>
                      اراء العملاء والاعضاء في كوبونات وعروض جو اوفر الحصرية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className={`${style.leftSide}`}>
                <div className={`${style.allRating} ms-5`}>
                  <div className={`${style.rating} mb-5 pb-2 me-2`}>
                    <span>
                      <img src="/img/Group.svg" alt="" />
                    </span>
                    <span>التقييمات</span>
                  </div>
                  <div className={`${style.stars}`}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star px-3"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star px-3"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div className={`${style.leftSideCaptio}`}>
                  <h3>محمد مصطفي</h3>
                  <span>طالب ثانوي</span>
                  <p className="pt-4">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                    النص أو العديد من النصوص الأخرى.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${style.rightSide} overflow-hidden`}>
                <div className={`${style.manPhoto} pt-5 mt-5`}>
                  <div className={`${style.rightCaption} float-end p-4 mt-5`}>
                    <p>
                      اراء العملاء والاعضاء في كوبونات وعروض جو اوفر الحصرية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className='w-25 m-auto mt-5 text-center'>
           <button className='btn text-white me-2 rounded-5      bgColor' onClick={handlePrev}>&lt;</button>
           <button className='btn text-white rounded-5 bgColor ' onClick={handleNext}>&gt;</button>
           </div>
    </div>
  );
}
