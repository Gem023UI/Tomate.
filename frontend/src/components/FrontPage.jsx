import React from "react";
import MainLayout from "./layouts/MainLayout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
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

            </div>
            <div className="section-three">

            </div>
            <div className="section-four">

            </div>
            <div className="section-five">

            </div>
        </section>
    </MainLayout>
  );
}