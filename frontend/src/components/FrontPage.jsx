import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MainLayout from "./layouts/MainLayout";
import "../styles/FrontPage.css"

export default function () {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <MainLayout>
        <section className="front-page-wrapper">
            <div className="section-one">
                <div className="hero-content">
                    <h1>Helping Farmers Grow Healthier Tomatoes</h1>
                    <p>An immersive forum for Tomato Growers, along with a function for taking care of our crops!</p>
                </div>
                <div className="contacts">
                    <a><FontAwesomeIcon icon={faEnvelope}/>tomatoguard@gmail.com</a>
                    <a><FontAwesomeIcon icon={faPhone}/>+63 123456789</a>
                </div>
            </div>
            <div className="section-two">
                <div className="testimonial-card">
                    <div className="testimonial-left">
                        <h1 className="testimonial-text">
                            Detect Diseases of your Tomatoes, in Real Time.
                        </h1>
                        <button className="learn-more-btn">Check Now</button>
                    </div>
                    <div className="testimonial-right">
                        <img src="/tomato.png" alt="tomato" className="tomato-image" />
                    </div>
                </div>
            </div>
            <div className="section-three">
                <div className="section-three-wrapper">
                    <div className="visual-area">
                        <div className="image-card">
                            <img
                            src="/tomatofarmers.png"
                            alt="Plants and People"
                            />
                        </div>
                        <div className="experience-card">
                            <h2>10+</h2>
                            <p>Diseases Detected<br />& Prevented</p>
                        </div>
                    </div>
                    <div className="content-area">
                        <h1>Where Plants Find<br />Their People.</h1>
                        <p>
                            This system is an AI-powered web application designed to help tomato 
                            farmers detect fruit and leaf diseases early using image-based machine 
                            learning. By analyzing images captured from multiple angles, the system 
                            identifies possible diseases, suggests appropriate counteractive measures, 
                            and provides timely email and in-app alerts. Through smart 
                            technology and collaboration, the system aims to improve crop health, 
                            reduce losses, and promote sustainable tomato farming.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="section-four">
                <h2 className="section-title">Detect These Diseases</h2>
                <p className="section-subtitle">
                    The following diseases can severly affect your crops and overall harvest. Detect and prevent them early on.
                </p>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3.5}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="carousel"
                >
                    <SwiperSlide className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Early Blight" />
                        <h3>Early Blight</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Late Blight" />
                        <h3>Late Blight</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Leaf Mold" />
                        <h3>Leaf Mold</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Septoria Leaf Spot" />
                        <h3>Septoria Leaf Spot</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 4 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 5 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 6 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 7 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 8 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 9 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>

                    <SwiperSlide className={`carousel-item ${activeIndex === 10 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Spider Mites" />
                        <h3>Spider Mites</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="section-five">
                <div className="tech-ribbon">
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <span>React</span>
                    </div>
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                        <span>CSS</span>
                    </div>
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                        <span>TensorFlow</span>
                    </div>
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" />
                        <span>NPM</span>
                    </div>
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <span>Node.js</span>
                    </div>
                    <div className="tech-item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
  );
}