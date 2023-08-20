import React, { useRef, useState } from "react";
import NavBtn from "./NavBtn";
import Logo from "./Logo";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

function Nav() {
  const navlinks = [
    "about",
    "services",
    "training & qualfication",
    "ressearch & developement",
    "clients",
    "contact us",
  ];
  const dropMenu = useRef();

  // handle show modal
  const showMenu = () => {
    dropMenu.current.classList.toggle("showMenu");
  };
  // handle state of nav btn
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <a
        href="/"
        className="logo flex flex-row justify-center -space-x-2 items-center w-fit"
      >
        <Logo className="w-20 h-20" />
        <span className="text-[--primary-color] font-semibold leading-3">
          MODREN
          <br />
          PROJECTS
        </span>
      </a>
      {/*logo*/}

      {/*btn-nav in small screens */}
      <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${isOpen ? "nav-list" : "max-lg:hidden lg:!flex-grow-0"}`}>
        <ul
          className={`navLinks ${isOpen && "max-lg:flex-col  max-sm:h-[70Vh]"}`}
        >
          <li className="navLink">
            <a href="#">Pricing</a>
          </li>
          {navlinks.map((link, index) => {
            if (link === "services") {
              return (
                <li className="navLink">
                  <a href="#" className="flex items-center">
                    {link} <AiOutlinePlus className="ms-1 mt-1" />
                  </a>
                </li>
              );
            }
            return (
              <li className="navLink">
                <a href="#">{link}</a>
              </li>
            );
          })}
          <li className="navLink flex items-center">
            <a href="#">
              <AiOutlineSearch className="xl:w-5 xl:h-5" />
            </a>
          </li>
        </ul>
      </div>
      <a className="getInTouch">GET IN TOUCH</a>
      {/*nav-list*/}
    </nav>
  );
}

export default Nav;
