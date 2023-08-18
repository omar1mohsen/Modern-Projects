/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import servicesImage from "../assets/ourServices.png";
function OurServices() {
  return (
    <section id="ourServices" className="ourServices ">
      <div className="left-side">
        <h3 className="sec-title">
          our <br /> <span className="special-letter">services</span>{" "}
        </h3>
        <p className="services-desc ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          maxime nemo modi facere eos dolorem.
        </p>
        <div className="btns ">
          <button className="arrow-btn cursor-not-allowed">
            <FiArrowLeft className="arrow text-slate-300/70 " />
          </button>
          <button className="arrow-btn hover:bg-[--blue-color] transition-all">
            <FiArrowRight className="arrow text-[--primary-color]" />
          </button>
        </div>
      </div>
      <div className="right-side ">
        <img src={servicesImage} alt="service-image" className="image" />
        <div className="image-card ">
          <h3>
            Vendor Inspection <br /> and Expediting
          </h3>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </p>
          <button className="detailsBtn">View Details</button>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
