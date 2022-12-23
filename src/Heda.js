import React from 'react';

/* import './aos/aos.css';
import 'C:/Users/Admin/project/tradingarena/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-icons/bootstrap-icons.css';
import './glightbox/css/glightbox.min.css';
import './swiper/swiper-bundle.min.css';
import './css/style.css';

import './purecounter/purecounter_vanilla.js';
import './aos/aos.js';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './glightbox/js/glightbox.min.js';
import './isotope-layout/isotope.pkgd.min.js';
import './swiper/swiper-bundle.min.js';
import './php-email-form/validate.js';
import './js/main.js'; */





function Heda() {
  return (
    <div className="header__wrapper">
        <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">

      <div class="logo">
        <h1><a href="#">Trading Arena</a></h1>
        <a href=""><img src="" alt="" class="img-fluid" /></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#">Home</a></li>
          <li><a class="nav-link scrollto" href="#">About</a></li>
          <li><a class="nav-link scrollto" href="#">Services</a></li>
          <li><a class="nav-link scrollto " href="#">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#">Team</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}

export default Heda