import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

function LandingPage() {
  return (
    <main className="h-screen bg-[--blue-color] overflow-hidden relative max-md:h-[60vh]">
      <Nav />
      <Hero />
    </main>
  );
}

export default LandingPage;
