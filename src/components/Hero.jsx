/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import heroImage from "../assets/heroImage.png";
import { FiArrowDownRight } from "react-icons/fi";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-image  ">
        <img src={heroImage} alt="hero-image" />
      </div>
      <div className="hero-desc ">
        <h3 className="main-title max-sm:text-sm">
          AN EGYPTIAN COMPANY THAT PROVIDES
        </h3>
        <h1 className="hero-title max-sm:text-sm !border-[--primary-color]">
          INSPECTION , CONSULTANCY AND <br /> EXPERT SERVICE
        </h1>
      </div>
      <div className="bottom-hero ">
        <div className="left-side">
          <p className="rotate-90 text-[--primary-color] mb-12">SCROLL</p>
          <hr className="w-12 rotate-90 block md:mx-auto" />
        </div>
        <div className="right-side  ">
          <div className="hero-bottom-desc  ">
            <div className="left-side max-sm:text-xs ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat…
            </div>
            <div className="right-side ">
              MORE ABOUT US
              <FiArrowDownRight className="hero-arrow " />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
