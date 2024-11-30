import React from 'react';
import style from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <>
      <div className="container pt-5">
        <div className={`${style.main} p-4`}>
          <div className="row align-items-center px-4 mx-auto">
        
            <div className="col-lg-3 col-md-4 text-center">
              <img
                src="/img/laptop.svg"
                className={style.imageResponsive}
                alt="Laptop"
              />
              <img
                src="/img/ps5.svg"
                className={style.imageResponsive}
                alt="PS5"
              />
            </div>

         
            <div className={`${style.centerDiv} col-lg-6 col-md-8 text-center`}>
              <img
                src="/img/h1.png"
                className={`${style.imageResponsive} m-auto p-4`}
                alt="Header Image"
              />
              <h1 className={`${style.h1}`}>عرض كوبونات جرير</h1>
              <p className={`${style.p}`}>
                كوبونات تصل بخصم الى 35%على منتجات مختاره فى متجر مكتبه جرير
              </p>
              <button className="btn btn-light fa-2x textColor w-75 p-3 my-5">
                اكتشفها الان
              </button>

           
              <div className={`${style.searchInput} mt-4`}>
                <input
                  className={`${style.btnSlide} form-control`}
                  placeholder="ابحث عن كل ما تحتاجه هنا"
                />
                 <i className={`${style.searchIcon} fa-solid fa-search`}></i>
                <button className={`${style.serchBtn}`}>
                 
                  بحث
                </button>
              </div>
            </div>

       
            <div className="col-lg-3 col-md-4 text-center">
              <img
                src="/img/watch.svg"
                className={style.imageResponsive}
                alt="Watch"
              />
              <img
                src="/img/headPhone.svg"
                className={`${style.imageResponsive} ps-lg-5 pt-lg-5`}
                alt="Headphones"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
