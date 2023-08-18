import React from "react";

function Logo({ className }) {
  return (
    <img src={require("../assets/Logo.png")} alt="logo" className={className} />
  );
}

export default Logo;
