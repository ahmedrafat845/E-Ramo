"use client";
import React, { useEffect, useRef, useState } from 'react';
import style from './Category.module.css'
import Slider from "react-slick";



export default function Category2({textColor,title}){

    const sliderRef = useRef(null);
 
    const [sliderReady, setSliderReady] = useState(false);
  
    useEffect(() => {
      if (sliderRef.current) {
        setSliderReady(true);
      }
    }, []);
  
      var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
           responsive: [
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 2,
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
        <>
        <div className='container mt-5 '>
          
            <div className='row '>
                <div className='col-md-12 pb-4'>
                    <h3 className={`float-end ${style.categoryName} ${textColor}`}>{title ? title : 'الكوبونات'}  </h3>
                    <div>
                    <button className='btn text-white me-2 rounded-5      bgColor' onClick={handlePrev}>&lt;</button>
                    <button className='btn text-white rounded-5 bgColor next-btn' onClick={handleNext}>&gt;</button>
                </div>

                </div>
                <Slider {...settings} ref={sliderRef}>
                <div className='col-md-4 p-2'>
                <div className={`${style.allCategory} `}>
                    <div className='row '>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-3'>
                                <i className={`${style.categoryName} fa-regular fa-heart`}></i>

                                </div>
                                <div className='col-md-9'>
                                <div className={`${style.arabic}`}>
                                    <h4 className={`${style.categoryName}`}>اكسترا</h4>
                                    <p className='text-muted'>%كود خصم 25</p>
                                    <p className='text-danger'>اخر استخدام منذ 1 ساعه</p>
                                </div>

                                </div>
                            </div>
                            <button className={`btn w-100 ${style.btnCategory}`}>عرض الكود</button>

                        </div>
                        <div className='col-md-4 p-2'>
                            <img src='/img/sala.png' className={`${style.categoryImg}`} height={150}/>
                          
                        </div>
                      
                    </div>
                    <hr className='mt-1'/>
                    <div className='row justify-content-between'>
                        <div className='col-md-4'>
                            <span>المشاركه</span>  <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className='col-md-4 '>
                            <span>4.9 <i class="fa-solid fa-star text-warning"></i></span>
                            <button className={`${style.btnCopon}`}>منتهي</button>

                        </div>

                    </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className={`${style.allCategory} `}>
                    <div className='row '>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-3'>
                                <i className={`${style.categoryName} fa-regular fa-heart`}></i>

                                </div>
                                <div className='col-md-9'>
                                <div className={`${style.arabic}`}>
                                    <h4 className={`${style.categoryName}`}>اكسترا</h4>
                                    <p className='text-muted'>%كود خصم 25</p>
                                    <p className='text-danger'>اخر استخدام منذ 1 ساعه</p>
                                </div>

                                </div>
                            </div>
                            <button className={`btn w-100 ${style.btnCategory}`}>عرض الكود</button>

                        </div>
                        <div className='col-md-4 p-2'>
                            <img src='/img/extra.png' className={`${style.categoryImg}`} height={150}/>

                        </div>
                        
                    </div>
                    <hr className='mt-1'/>
                    <div className='row justify-content-between'>
                        <div className='col-md-4'>
                            <span>المشاركه</span>  <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className='col-md-4 '>
                            <span>4.9 <i class="fa-solid fa-star text-warning"></i></span>
                            <button className={`${style.btnCopon}`}>منتهي</button>

                        </div>

                    </div>
                </div>
                </div>
               <div className='col-md-4'>
               <div className={`${style.allCategory} `}>
                    <div className='row '>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-md-3'>
                                <i className={`${style.categoryName} fa-regular fa-heart`}></i>

                                </div>
                                <div className='col-md-9'>
                                <div className={`${style.arabic}`}>
                                    <h4 className={`${style.categoryName}`}>اكسترا</h4>
                                    <p className='text-muted'>%كود خصم 25</p>
                                    <p className='text-danger'>اخر استخدام منذ 1 ساعه</p>
                                </div>

                                </div>
                            </div>
                            <button className={`btn w-100 ${style.btnCategory}`}>عرض الكود</button>

                        </div>
                        <div className='col-md-4 p-2'>
                            <img src='/img/elarabia.png' className={`${style.categoryImg}`} height={150}/>

                        </div>
                       
                    </div>
                    <hr className='mt-1'/>
                    <div className='row justify-content-between'>
                        <div className='col-md-4'>
                            <span>المشاركه</span>  <i class="fa-solid fa-share-nodes"></i>
                        </div>
                        <div className='col-md-4 '>
                            <span>4.9 <i class="fa-solid fa-star text-warning"></i></span>
                            <button className={`${style.btnCopon} btn-success`}>منتهي</button>

                        </div>

                    </div>
                </div>
               </div>

                </Slider>
               
               

            </div>





        </div>
        
        </>
       
    );
};


