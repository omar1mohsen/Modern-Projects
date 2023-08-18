import React from "react";
import aboutImage from "../assets/aboutUs.png";
function AboutUs() {
  return (
    <section id="aboutUs" className="aboutBox">
      <div className="left-side">
        <h3 className="sec-title">
          HOw we are <br /> <span className="special-letter">Differnet</span>{" "}
        </h3>
        <div className="desc-card">
          <div className="text-box mt-6 mb-12">
            <h3 className="box-title">SUB-TITLE</h3>
            <p className="box-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className="text-box">
            <h3 className="box-title">SUB-TITLE</h3>
            <p className="box-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={aboutImage} alt="about-us" className="min-h-full w-full" />
      </div>
    </section>
  );
}

export default AboutUs;
