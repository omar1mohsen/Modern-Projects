import React from "react";
import LandingPage from "../sections/LandingPage";
import AboutUs from "../sections/AboutUs";
import TextTicker from "../components/TextTicker";
import OurServices from "../sections/OurServices";
import OurClients from "../sections/OurClients";
import Footer from "../sections/Footer";

function Home() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <TextTicker />
      <OurServices />
      <OurClients />
      <Footer />
    </>
  );
}

export default Home;
