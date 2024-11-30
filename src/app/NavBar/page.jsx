import Link from 'next/link';
import React from 'react';
import style from './NavBar.module.css';

export default function NavBar() {
  return (
    <>
      <nav className={`${style.navbarr} navbar navbar-expand-lg bg-body-tertiary p-3`}>
        <div className="container">
  
          <div className="d-flex align-items-center">
            <button className={`btn text-white ${style.navBtn}`}>الدخول/ انشاء حساب </button>
            <button className="ms-3 btn btn-outline-danger">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>{' '}
              Eng
            </button>
          </div>

       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

     
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>تواصل معنا</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>تطبيق لجوال</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>الصفقات</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>الكوبونات</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>العلامات التجاريه</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/School">
                  <span className={`${style.span}`}>الفئات</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${style.activeColor}`} href="/School">
                  <span className={`${style.span}`}>الرئيسيه</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <img src="/img/navIcon.svg" className="w-75" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
