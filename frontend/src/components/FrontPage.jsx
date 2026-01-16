import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MainLayout from "./layouts/MainLayout";
import "../styles/FrontPage.css"

export default function () {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 since centered

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rubberband: true,
    slides: {
        perView: 3,
        spacing: 25,
    },
    centered: true,
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
    },
  });
  
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
                <div ref={sliderRef} className="carousel keen-slider">
                    <div className={`keen-slider__slide carousel-item ${currentSlide === 0 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Calathea Plant" />
                        <h3>Calathea Plant</h3>
                    </div>

                    <div className={`keen-slider__slide carousel-item ${currentSlide === 1 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Monstera Adansonii" />
                        <h3>Monstera Adansonii</h3>
                    </div>

                    <div className={`keen-slider__slide carousel-item ${currentSlide === 2 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Crassula Ovata" />
                        <h3>Crassula Ovata</h3>
                    </div>

                    <div className={`keen-slider__slide carousel-item ${currentSlide === 3 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Crassula Ovata" />
                        <h3>Crassula Ovata</h3>
                    </div>

                    <div className={`keen-slider__slide carousel-item ${currentSlide === 4 ? 'active' : ''}`}>
                        <img src="/diseases/earlyblight.png" alt="Crassula Ovata" />
                        <h3>Crassula Ovata</h3>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
  );
}