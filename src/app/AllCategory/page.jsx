import React from 'react'
import Category2 from '../Category2/page'
import style from './AllCategory.module.css'

export default function AllCategory() {
  return (
    <>
    <div className={`${style.AllCategory}  mt-5`}>
        <div className=" m-auto text-center pt-5">
            <h2 className='text-white'>عروض وكوبونات خاصة بمناسبة اليوم الوطني الـــ94</h2>
        </div>
        <div className="">
            <Category2 textColor={'text-white'} title={'كــل الكـــوبونـــات'}/>
        </div>
    </div>
      
    </>
  )
}
