import React from 'react';
import style from './Manasa.module.css'

export default function Manasa() {

    return (
        <>
            <div className='container pt-5'>
                <div className='m-auto text-center'>
                    <img src='/img/navIcon.svg' alt="Nav Icon" />
                    <h3>ما هي منصه جو اوفر</h3>
                </div>

                <div className='container pt-5'>
                    <div className="row">
                        <div className='col-md-6'>
                            <img src='/img/manasa.png' alt="Manasa" className={`${style.manasaImage}`} />
                        </div>

                        <div className={`${style.manasaP} col-md-6`}>
                            <p className={`${style.manasaP} pt-4 ps-5`}>
                                الحياة فرص، فاحرص على استغلالها لتحقيق أحلامك
                                النجاح يحتاج إلى صبر وعمل واجتهاد مستمر
                                الابتسامة هي المفتاح السحري لقلوب الآخرين
                                الإرادة القوية تصنع المستحيل وتفتح الأبواب المغلقة
                                العلم نور يهدي العقول ويطور المجتمعات
                                الوقت هو أغلى ما تملك، فلا تهدره فيما لا ينفع
                                الإيمان بنفسك هو الخطوة الأولى نحو تحقيق أي هدف
                            </p>

                            <h5 className={`${style.manasaH5} my-5`}>ما يميزنا</h5>

                            <p className={`${style.ff}`}>
                                <i className={`fa-solid fa-circle ${style.manasaIcon}`}></i> الابتسامة هي المفتاح السحري لقلوب الآخرين
                            </p>
                            <p className={`${style.ff}`}>
                                <i className={`fa-solid fa-circle ${style.manasaIcon}`}></i> الابتسامة هي المفتاح السحري لقلوب الآخرين
                            </p>
                            <p className={`${style.ff}`}>
                                <i className={`fa-solid fa-circle ${style.manasaIcon}`}></i> الابتسامة هي المفتاح السحري لقلوب الآخرين
                            </p>
                            <p className={`${style.ff}`}>
                                <i className={`fa-solid fa-circle ${style.manasaIcon}`}></i> الابتسامة هي المفتاح السحري لقلوب الآخرين
                            </p>

                            <button className={`btn text-white mt-5 ${style.navBtn}`}>الدخول/ انشاء حساب</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
