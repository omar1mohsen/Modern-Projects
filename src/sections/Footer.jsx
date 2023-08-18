import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="upper-footer ">
        <div className="scoial">
          <p className="text-sm lg:text-xl uppercase">follow us</p>
          <span className="hrline " />
          <BiLogoFacebook className="social-icon" />
          <span className="hrline" />
          <BiLogoLinkedin className="social-icon " />
          <span className="hrline" />
          <AiOutlineTwitter className="social-icon" />
        </div>
        <p>Privacy Policy</p>
      </div>
      <div className="lower-footer">
        <p className="footer-text">© Modern Projects. All rights reserved.</p>
        <p className="footer-text ">
          Developed by <span className="text-[--primary-color]">OMAR</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
