import React, { useEffect } from "react";
import aboutImage from "../assets/aboutUs.png";
function AboutUs() {
  let started = false; // Function Started ? No

useEffect(()=>{
    let statsbox = document.querySelectorAll(".stat-num");
    let section = document.querySelector(".aboutBox .right-side");

    function counter(ele) {
      let goal = ele.dataset.goal;
      let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent === goal) {
          clearInterval(count);
        }
      }, 2000 / goal);
    }
    const startCount = function () {
      if (window.scrollY >= (section.offsetTop - 200)) {
        console.log(section.offsetTop);
        if (!started) {
          statsbox.forEach((stat) => counter(stat));
        }
        started = true;
      }
    };
    window.addEventListener('scroll', startCount)

})
  
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className="text-box">
            <h3 className="box-title">SUB-TITLE</h3>
            <p className="box-desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={aboutImage} alt="about-us" className="min-h-full w-full" />
        <span
          data-goal="15"
          className="stat-num absolute text-[--primary-color] max-sm:top-[14.1%] top-[14.5%] left-[64.5%] max-sm:text-sm text-2xl lg:text-3xl font-semibold bg-[--blue-color]  pe-32"
        >
          0
        </span>
        <div className=" absolute text-[--primary-color] max-sm:top-[46%] top-[46.3%] left-[64.5%] max-sm:text-sm text-2xl lg:text-3xl font-semibold bg-[--blue-color]  pe-32">
        <span
          data-goal="10"
          className="stat-num "
        >
          0
        </span>
        <span>+</span>
        </div>
        <div className=" absolute text-[--primary-color] max-sm:top-[74.7%]  top-[75%] left-[63.6%] max-sm:text-sm text-2xl lg:text-3xl font-semibold bg-[--blue-color] pe-32 ">
        <span
          data-goal="60"
          className="stat-num "
        >
          0
        </span>
        <span>+</span>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
