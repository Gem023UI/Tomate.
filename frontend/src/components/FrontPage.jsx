import React from "react";
import MainLayout from "./layouts/MainLayout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import "../styles/FrontPage.css"

export default function () {
  const navigate = useNavigate();

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
                            Detect Diseases of your Crops, in Real Time.
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
                            src="/section1-bg.png"
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="section-four">

            </div>
        </section>
    </MainLayout>
  );
}