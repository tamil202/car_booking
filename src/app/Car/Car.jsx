'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TypeIt from 'typeit';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import A0 from '../../../public/logo.png'
import A1 from '../../../public/A1.webp'
import A2 from '../../../public/A2.webp'
import A3 from '../../../public/A3.png'
import A4 from '../../../public/A4.png'
import A5 from '../../../public/A5.jpg'
import A6 from '../../../public/A6.png'
import A7 from '../../../public/A7.png'
import A8 from '../../../public/A8.jpg'
import A9 from '../../../public/A9.webp'
import A10 from '../../../public/A10 (1).webp'
import Form from '../Form/Form';
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { MdOutlineFindReplace } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './car.css'
import './querry.css'
const Car = () => {
  const typeRef = useRef(null);
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    AOS.init({
      duration: 1000,
      once: true,
    });

    new TypeIt(typeRef.current, {
      strings: ['Fast.', 'Easy.', 'Affordable.'],
      speed: 100,
      breakLines: false,
      deleteSpeed: 50,
      loop: true,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (

    <>
      <section>
        <nav className="navbar navbar-expand-lg  navcolor p-3">
          <div className="container">
            <a className="navbar-brand car-00 " href="#">
              <Image src={A0} className="car-0" alt="img" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <FaCarCrash
                style={{
                  color: '#ffce07',
                  fontSize: '28px',
                  fontWeight: '600',
                  border: 'none'
                }} />
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <IoCarOutline data-bs-dismiss="offcanvas" aria-label="Close"
                  style={{
                    color: '#ffce07',
                    fontSize: '28px',
                    fontWeight: '600',
                    border: 'none'
                  }} />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-wrap w-100 gap-3">
                  <li className="nav-item">
                    <button className="button">
                      +123456789010
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className='container'>
        <div>
          <div className="row">
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 car-home-1'>
              <div className='car-home mt-5'>
                <h1>Find Your Perfect Ride –<span ref={typeRef} style={{ color: '#ffce07', fontSize: '28px', fontWeight: '600' }}></span></h1>
                <span>Reserve your ride now — no queues, no stress. </span>
                <span> Instant booking, unlimited freedom.</span>
              </div>

              <section className='mt-2'>
                <Form />
              </section>

            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
              <div className='car-home'>
                <Image src={A3} className="img-fluid car-1" alt="img" data-aos="zoom-in-up" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='mt-5 container '>
        <section className='mt-5 container '>
          <h1 className='Drive'>Drive in Style, Comfort & Confidence</h1>
        </section>
        <section className='drive-tech'>
          <div className="row mt-5">
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info'>
                <Image src={A6} className=" drive-img" alt="img" data-aos="flip-left" />
              </section>
            </div>
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info'>
                <span>
                  <IoLocationSharp style={{
                    color: 'ffce07'
                  }} />
                </span>
                <h3 className='mt-3'>Ride with Comfort, Class & Control</h3>
                <small className='mt-2'>Choose from clean, reliable cars ready for any trip.
                  Whether it’s around town or a long drive, enjoy it your way.</small>
              </section>
            </div>
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info'>
                <Image src={A4} className=" drive-img" alt="img" />
              </section>
            </div>
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info'>
                <span>
                  <FaCar style={{
                    color: 'ffce07'
                  }} />
                </span>
                <h3 className='mt-3'>Experience Freedom, Flexibility & Fun</h3>
                <small className='mt-2'>Go where you want, when you want — without limits.
                  With easy pick-up and drop-off, you're in control of your adventure.</small>
              </section>
            </div>
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info' >
                <Image src={A4} className=" drive-img" alt="img" />
              </section>
            </div>
            <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 drive-details'>
              <section className='drive-info'>
                <span>
                  <MdOutlineFindReplace style={{
                    color: 'ffce07'
                  }} />
                </span>
                <h3 className='mt-3'>Navigate with Ease, Every Step of the Way</h3>
                <small className='mt-2'>Get built-in GPS options and location support to keep you on the right track.
                  Whether exploring new cities or remote routes, we’ve got your journey mapped out.</small>
              </section>
            </div>
          </div>
        </section>
      </section>

      <section className='mt-5 container'>
        <div className="row">
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='deals'>
              <Image src={A7} className="deals-img" alt="img" data-aos="flip-right" />
            </section>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='rental-deals'>
              <div>
                <span><FaCarOn /></span> <h4> Experience the Joy of Smart Car Rentals Feel the Drive. Love the Deals. </h4> <br />
              </div>
              <ul>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>10+ Years of Industry Experience</li>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>Flexible Daily, Weekly & Monthly Plans</li>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>Affordable Prices, Premium Cars</li>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>Exclusive Festival & Weekend Offers</li>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>Over 5,000 Successful Rentals</li>
                <li> <span style={{ padding: '0px 2px', color: 'black' }}><FaCaretRight /></span>Free Pickup & Drop on Selected Packages</li>
              </ul>
            </section>
          </div>
        </div>
      </section>



      <section className='mt-5 container'>
        <div>
          <h2 style={{
            textAlign: 'center',
            color: '#ffce07',
            fontSize: '28px',
            fontWeight: '600'

          }}>Our services</h2>
        </div>
        <div className="row mt-5">
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
            <section className='our'>
              <div className="car mt-4">
                <div className="car-shine"></div>
                <div className="car-glow"></div>
                <div className="car-content">
                  <div className="car-image">
                    <Image src={A5} className="img-fluid car-2" alt="img" />
                  </div>
                  <div className="car-text">
                    <p className="car-title">Outstation Trips</p>
                    <p className="car-description">Planning a getaway? Rent a car for outstation travel with unlimited kilometers and 24/7 support.
                      Ideal for weekend trips, hill stations, and long-distance drives.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
            <section className='our'>
              <div className="car mt-4">
                <div className="car-shine"></div>
                <div className="car-glow"></div>
                <div className="car-content">
                  <div className="car-image">
                    <Image src={A9} className="img-fluid car-2" alt="img" />
                  </div>
                  <div className="car-text">
                    <p className="car-title">Local City Rides</p>
                    <p className="car-description">Need a car for a few hours or a full day in the city?
                      Choose hourly or daily packages perfect for shopping, meetings, or casual rides.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
            <section className='our'>
              <div className="car mt-4">
                <div className="car-shine"></div>
                <div className="car-glow"></div>
                <div className="car-content">
                  <div className="car-image">
                    <Image src={A8} className="img-fluid car-2" alt="img" />
                  </div>
                  <div className="car-text">
                    <p className="car-title">Event & Wedding Rentals</p>
                    <p className="car-description">Make your special day grand with luxury cars for weddings and events.
                      Choose from premium sedans, SUVs, or chauffeur-driven rides.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>



      <section className='mt-5 container'>
        <div>
          <h2 style={{
            textAlign: 'center',
            color: '#ffce07',
            fontSize: '28px',
            fontWeight: '600'
          }}>Our Customer Review</h2>
        </div>
        <div className="row mt-4">
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 '>
            <section className='car-slider mt-5'>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <section className='car-swiper'>
                    <p>“The booking process was quick and easy. The car was clean, comfortable, and perfect for our trip!”</p>
                    <h2>Priya S</h2>
                    <small> Chennai</small>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section className='car-swiper'>
                    <p>"I booked a car for a weekend road trip, and everything went smoothly. Excellent support team!"</p>
                    <h2>Sneha R., </h2>
                    <small> Coimbatore</small>
                  </section>

                </SwiperSlide>
                <SwiperSlide>
                  <section className='car-swiper'>
                    <p>"Great experience! Affordable pricing and professional service. I’ll definitely rent again."</p>
                    <h2>Rahul M</h2>
                    <small>Bengaluru</small>
                  </section>

                </SwiperSlide>
                <SwiperSlide>
                  <section className='car-swiper'>
                    <p>“The best rental service I’ve used so far. No hidden charges, and the pickup was right on time.” .</p>
                    <h2>Arjun K.</h2>
                    <small>Hyderabad</small>
                  </section>

                </SwiperSlide>

              </Swiper>
            </section>
          </div>
        </div>
      </section>


      <section className='mt-5 container'>
        <div>
          <h2 className='taxhead' style={{
            textAlign: 'center',
            color: '#ffce07',
            fontSize: '28px',
            fontWeight: '600'

          }}> Your Ride-Our Responsibility</h2>
        </div>
        <div className="row mt-4">
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='taxi'>
              <Image src={A1} className="itaxi " alt="img" data-aos="zoom-in-down" />
            </section>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='taxi mt-5'>
              <p>we provide safe, reliable, and comfortable rides—whether for city travel, airport transfers, or outstation trips. Our clean, well-maintained fleet includes hatchbacks, sedans, and SUVs, perfect for individuals, families, or corporate use. With 24/7 service, trained drivers, transparent pricing, and easy booking, we ensure a smooth and stress-free experience. Whether it's a quick ride or a weekend trip, trust us to get you there with care and comfort.</p>
            </section>
          </div>
        </div>
      </section>



      <section className='mt-5 container'>
        <div className="row mt-4">
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='taxi mt-5'>
              <p>Taxi Services is your trusted partner for quick, safe, and comfortable transportation. From daily commutes to special occasions, our diverse fleet and professional drivers ensure every ride is smooth and stress-free. We offer flexible packages, 24/7 availability, and simple booking through phone or website. Whether you're traveling across town or out of the city, we make every journey easy, affordable, and reliable.</p>
            </section>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
            <section className='taxi mt-5'>
              <Image src={A2} className="itaxi " alt="img" data-aos="zoom-in-up" />
            </section>
          </div>
        </div>
      </section>

      <section className='car-last-tech container mt-5'>
        <div className="row last-1 ">
          <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 last-2' >
            <section className='car-last mt-2'>
              <p>Your journey deserves more than just a ride — it deserves comfort, safety, and care.
                At Keyan Taxi Services, we deliver all that and more, every single time.
                Book today and experience travel the way it should be.</p>
              <button> <a href="">Book-Now</a></button>
            </section>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 last-3' >
            <section className='car-last mt-2'>
              <Image src={A10} className="icar" alt="img" data-aos="fade-up"
                data-aos-duration="3000" />
            </section>
          </div>
        </div>

      </section>

      <section className='mt-5'>
        <hr className="mt-5 border-gray-300 mt-5" />

      </section>
      <section className='last-last'>
        <span className="last">
          © 2025 Jeevan Taxi. All rights reserved.
        </span>
      </section>


    </>

  );
};

export default Car;
