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


function CryBackground() {
  return (
    <div>
        <div className="CryptoBackgrond__section">
            <section id="hero" class="clearfix">
                <div class="container" data-aos="fade-up">

                    <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/hero-img.svg" alt="" class="img-fluid"/>
                    </div>

                    <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
                        <h2>We provide<br/><span>solutions</span><br/>for your business!</h2>

                        <div>
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>
                            <a href="#services" class="btn-services scrollto">Our Services</a>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    </div>
  )
}

export default CryBackground