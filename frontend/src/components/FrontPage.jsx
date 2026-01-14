import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import "../styles/FrontPage.css"

export default function () {
  const navigate = useNavigate();

  return (
      <section className="about-page-wrapper">
        <div className="section-one">
            <div className="hero-content">
                <img src={logo} alt="tomate logo" />
                <h1>tomate.</h1>
            </div>
            <p>An immersive forum for Tomato Growers, along with a function for taking care of our crops!</p>
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
  );
}