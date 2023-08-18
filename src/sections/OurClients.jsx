import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import { FiArrowDownRight } from "react-icons/fi";
function OurClients() {
  const clients = [
    {
      logo: client1,
      date: "2010 - 2011",
      name: "Ultrasonic testing",
    },
    {
      logo: client2,
      date: "2010 - 2011",
      name: "Non-Destructive Testing",
    },
    {
      logo: client3,
      date: "2010 - 2011",
      name: "Ultrasonic Print out test",
    },
    {
      logo: client4,
      date: "2010 - 2011",
      name: "Ultrasonic Print out test",
    },
    {
      logo: client5,
      date: "2010 - 2011",
      name: "Non-Destructive Testing",
    },
    {
      logo: client6,
      date: "2010 - 2011",
      name: "Lifting Equipment Inspection",
    },
  ];
  return (
    <section id="OurClients" className="OurClients">
      <div className="contaniner">
        <div className="clientBox flex items-center">
          <h3 className="sec-title max-sm:text-2xl">
            our <br /> <span className="special-letter">clients</span>{" "}
          </h3>
        </div>
        {clients.map((client) => {
          return (
            <div className="clientBox">
              <div className="clientCard ">
                <img src={client.logo} alt={client.name} className="image" />
                <p className="date">{client.date}</p>
                <hr className="my-3 w-[90%] mx-auto" />
                <p className="clientName">{client.name}</p>
              </div>
            </div>
          );
        })}
        <div className="clientBox">
          <div className="btnCard">
            View All
            <FiArrowDownRight className="hero-arrow " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
