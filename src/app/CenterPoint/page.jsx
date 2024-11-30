import React from 'react'
import style from './CenterPoint.module.css'

export default function CenterPoint() {
  return (
    <>
    <div className={`${style.centerPoint} rounded-5`}>
      <div className={`${style.hov} pt-5 mt-5 rounded-5`}>
      <div className="container">
     <div className="row   ">
        <div className="col-md-6">
          <div className={`${style.leftSide} text-white ps-5`}>
            <h2 >50%</h2>
            <p>خصم</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className={`${style.rightSide} pe-5`}>
            <img src="./img/Group.png" className='' alt="" />
            <h3 className='pt-4 text-white'>العرض اليـومي لبراند “سنتر بوينت”</h3>
            <p className='text-white'>احصل علي كود خصــم سنتر بوينت بقيمة 50% علي منـتجات مخــتارة</p>
            <button className={`${style.centerBtn} `}>
            <span className={`${style.icon}`}><i class="fa-solid fa-percent"></i></span>
              <span>عرض الكود</span>

              
            </button>

          </div>
        </div>
      </div>
     </div>
      </div>

    </div>
      
    </>
  )
}
