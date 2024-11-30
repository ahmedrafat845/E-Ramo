import React from 'react';
import style from './Footer.module.css';





export default function Footer() {
    return (
        <>
       <div className={`${style.footer} pt-5 my-5`}>
        <div className={`${style.line} mb-5`}></div>
       <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src="./img/navIcon.svg" className={`${style.iconFooter} mb-4   `} alt="" />

                </div>
            </div>
            <div className="row">
               
                <div className={`${style.pp} col-md-3`}>
                    <h5>روابط سريعة</h5>
                    <p><span className={`${style.spanColor}`}></span> الرئيسية </p>
                    <p><span className={`${style.spanColor}`}></span> الكوبونات </p>
                    <p><span className={`${style.spanColor}`}></span> الصفقات </p>
                    <p><span className={`${style.spanColor}`}></span> تواصل معنا </p>
                    <p><span className={`${style.spanColor}`}></span> العرض اليومي </p>


                </div>
                <div className={`${style.pp} col-md-3`}>
                    <h5>الفئات</h5>
                    <p><span className={`${style.spanColor}`}></span> البقالة </p>
                    <p><span className={`${style.spanColor}`}></span> الملابس </p>
                    <p><span className={`${style.spanColor}`}></span> الرفهيات والسفر </p>
                    <p><span className={`${style.spanColor}`}></span> مستلزمات المنزل</p>
                    <p><span className={`${style.spanColor}`}></span> الكفيهات</p>


                </div>
                <div className={`${style.pp} col-md-3 pe-5`}>
                    <h5>العلامات التجارية</h5>
                    <p><span className={`${style.spanColor}`}></span> العثـيم </p>
                    <p><span className={`${style.spanColor}`}></span> تمور واكثر </p>
                    <p><span className={`${style.spanColor}`}></span> نعناع </p>
                    <p><span className={`${style.spanColor}`}></span>نون</p>
                    <p><span className={`${style.spanColor}`}></span>سنتر بوينت</p>


                </div>
                <div className="col-md-3 pe-5">
                    <h5>التواصل الاجتماعي والتطبيق</h5>
                    <div className={`${style.icon1} pt-4`}>
                       <img src="./img/face.svg" alt="" />
                        <img src="./img/instagram.svg" className='pe-4' alt="" />
                    </div>
                    <div className={`${style.icon2} mt-5`}>
                       <img src="./img/lin.svg" alt="" />
                        <img src="./img/snapchat.svg" className='px-4' alt="" />
                        <img src="./img/youtube.svg" className='pe-4' alt="" />
                    </div>
                    <div className={`${style.icon3} mt-5 pt-5`}>
                        <img src="./img/appStore.svg" alt="" />
                        <img src="./img/googlePlay.svg" className='d-block mt-4' alt="" />
                        
                    </div>
                </div>
            </div>

           



        </div>
        <div className={`${style.line2} my-5`}></div>
        <div className="container-fluid">
        <div className="row">
                <div className="col-md-3">
                    <p className={`${style.footerP}`}>خصوصية الاستخدام</p>
                </div>
                <div className="col-md-6">
                    <p className={`${style.footerP}`}>الشروط والاحكام</p>
                </div>
                <div className="col-md-3">
                    <p className={`${style.footerP2}`}>الحقوق محفوظة الي جو اوفر 2024</p>
                </div>
            </div>

        </div>
       </div>
            
        </>
    );
}
