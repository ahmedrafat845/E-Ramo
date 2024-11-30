"use client";
import React from 'react';
import style from './Bramd.module.css'
import Slider from "react-slick";

export default function Brands() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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

    return (
        <>
            <div className={`${style.allBrands} mt-5 pt-5`}>
                <div className='container'>
                    <h2 className={`${style.brandH2} text-center`}>تصفح حسب العلامات التجاريه</h2>
                    <div className='row py-5'>
                        <Slider {...settings}>
                            <div className='col-md-3 '>
                                <div className={`${style.brandMain} text-center`}>
                                    <img className='p-3 m-auto' src='/img/akalat.png' alt="Akalat" />
                                    <h4 className={`${style.brandH4}`}>اكلات جدودنا</h4>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className={`${style.brandMain} text-center`}>
                                    <img className='p-3 m-auto' src='/img/tmour.png' alt="Tmour" />
                                    <h4 className={`${style.brandH4}`}>تمور واكثر</h4>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className={`${style.brandMain} text-center`}>
                                    <img className='p-3 m-auto' src='/img/almarai1.png' alt="Almarai" />
                                    <h4 className={`${style.brandH4}`}>المراعي</h4>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className={`${style.brandMain} text-center`}>
                                    <img className='p-3 m-auto' src='/img/nana.png' alt="Nana" />
                                    <h4 className={`${style.brandH4}`}>نعناع</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 m-auto text-center'>
                            <p className={`${style.brandP}`}>عرض الكل</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
