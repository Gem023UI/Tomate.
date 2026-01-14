import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png"
import MainLayout from "./layouts/MainLayout";
import "../styles/FrontPage.css"

export default function () {
  const navigate = useNavigate();

  return (
    <MainLayout>
        <section className="front-page-wrapper">
            <div className="section-one">
                <div className="hero-content">
                    <img src={logo} alt="tomate logo" />
                    <h1>TomatoGuard</h1>
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
    </MainLayout>
  );
}