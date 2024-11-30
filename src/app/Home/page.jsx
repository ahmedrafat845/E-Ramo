import React from 'react'
import NavBar from '../NavBar/page'
import LandingPage from '../LandingPage/page'
import Category from '../Category/page'
import Brands from '../Brands/page'
import Manasa from '../Manasa/page'
import Category2 from '../Category2/page'
import Footer from '../Footer/page'
import AllCategory from '../AllCategory/page'
import Man from '../Man/page'
import Articles from '../Articles/page'
import CenterPoint from '../CenterPoint/page'

export default function Home(){
    return(
        <>
        <NavBar/>
        <LandingPage/>
        <Category/>
        <Category2 textColor={'textColor'} title={'الكــوبونـــات الاكــثـر اســتخدامـــا'}/>
        <Brands/>
        <Manasa/>
        <Category2 textColor={'textColor'} title={'كــل الكـــوبونـــات'}/>
        <Category2 textColor={'textColor'} title={'عرض الكل'}/>
        <AllCategory/>
        <Category2 title={'العروض الحصــرية'} textColor={'textColor'}/>
        <Man/>
        <Articles/>
        <CenterPoint/>
        <Footer/>

        </>



    )
}