import React, { useState } from "react";
import { logo, logo_blue } from "../assets";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);
  const navigate = useNavigate();

  const navigateCloseMenu = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <div className="sticky top-0 w-full p-2 md:px-3 z-50 shadow-md bg-gray-100">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div className="justify-center items-center">
          {/* <button onClick={() => navigate("/")}>
            <img src={logo_blue} className="h-[28px] cursor-pointer" />
          </button> */}
          <Link to="hero" duration={500} smooth={true} onClick={closeMenu}>
            <img src={logo_blue} className="h-[28px] cursor-pointer" />
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex gap-16 font-semibold text-base text-gray-800">
            {/* <button className="hover:text-brite active:text-brite-active focus:outline-none">
              <Link to="hero" duration={500} smooth={true} onClick={closeMenu}>
                Home
              </Link>
            </button> */}

            <button
              onClick={() => navigate("/pricing")}
              className="hover:text-brite duration-100 transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 active:text-brite-active"
            >
              Preços
            </button>

            <button className="hover:text-brite duration-100 transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 active:text-brite-active">
              <Link to="benefits" duration={500} smooth={true}>
                Recursos
              </Link>
            </button>

            {/* <button className="hover:text-brite active:text-brite-hover focus:outline-none">
              <Link to="faq" duration={800} smooth={true}>
                Dúvidas
              </Link>
            </button> */}

            <button
              onClick={() =>
                window.open("https://calendly.com/paivabrasill/brite")
              }
              className="px-6 py-2 rounded-xl bg-white transition ease-out duration-300 hover:scale-105 active:text-brite-active text-brite font-bold border-2 border-brite hover:bg-brite hover:text-white focus:outline-none focus:ring-2"
            >
              Contate-nos
            </button>
          </div>
        </div>

        {/* <div className="hidden md:flex">
          <button
            onClick={() =>
              window.open("https://calendly.com/paivabrasill/brite")
            }
            className="flex justify-between items-center px-6 gap-2 text-white hover:text-gray-200 active:text-gray-300 focus:outline-none"
          >
            Contate-nos
          </button>
          <button className="px-8 py-3 rounded-md bg-white transition ease-out duration-300 hover:scale-105 active:text-gray-300 text-brite font-bold border border-brite-active hover:border-transparent focus:outline-none focus:ring-2 active:bg-gray-100">
            Teste de Graça
          </button>
        </div> */}

        <div className="md:hidden py-1.5" onClick={handleClick}>
          {toggle ? (
            <button className="bg-white p-1.5 rounded-full shadow-lg">
              <RxCross2 className="text-brite font-semibold" size={20} />
            </button>
          ) : (
            <button className="bg-white p-1.5 rounded-full shadow-lg">
              <RxHamburgerMenu className="text-brite font-semibold" size={20} />
            </button>
          )}
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-50 backdrop-blur-2xl h-screen w-full px-10 md:hidden"
            : "hidden"
        }
      >
        <div className="">
          <div className="flex flex-col pt-16 gap-16 font-bold text-xl text-gray-950">
            {/* <button className="hover:text-brite active:text-brite-active focus:outline-none">
              <Link to="hero" duration={500} smooth={true} onClick={closeMenu}>
                Home
              </Link>
            </button> */}

            <button
              onClick={() => navigateCloseMenu("/pricing")}
              className="hover:text-brite active:text-brite-active focus:outline-none"
            >
              Preços
            </button>

            <button className="hover:text-brite active:text-brite-hover focus:outline-none">
              <Link to="benefits" duration={500} smooth={true} onClick={closeMenu}>
                Recursos
              </Link>
            </button>

            {/* <button className="hover:text-brite active:text-brite-hover focus:outline-none">
              <Link to="faq" duration={800} smooth={true}>
                Dúvidas
              </Link>
            </button> */}

            <button
              onClick={() =>
                window.open("https://calendly.com/paivabrasill/brite")
              }
              className="px-2 py-6 rounded-full bg-white transition ease-out duration-300 hover:scale-105 active:text-brite-active text-brite font-bold border border-brite hover:bg-brite hover:text-white focus:outline-none focus:ring-2"
            >
              Contate-nos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
