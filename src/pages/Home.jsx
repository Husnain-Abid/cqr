import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import text from "../assets/images/text.png";
import Logos from "../components/Logos";
import { Link } from "react-router-dom";
import { Moon, SunMoon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/themeSlice";





const Home = () => {


  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  // Apply dark mode to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  console.log("isDarkMode", isDarkMode);


  return (
    <>

      <div className={` px-36 overflow-hidden flex justify-end gap-5 py-10 ${isDarkMode ? "bg-[#3F3F3F] text-white " : ""} `}>
        <Link to="/contact" className=" hover:text-[#DD5471]">Contact</Link>
        <div onClick={() => dispatch(toggleDarkMode())}>
          {isDarkMode ? (
            <SunMoon className="text-[#DD5471]" />
          ) : (
            <Moon className="text-[#DD5471]" />
          )}
        </div>

      </div>


      <div className={`min-h-screen font-helvetica  flex justify-center items-center relative overflow-auto ${isDarkMode ? "bg-[#3F3F3F] " : ""}`}>



        <div className="relative z-0 flex justify-center items-center">
          <div className="flex justify-center items-center ">

            {/* main Logo  */}
            <div className="flex justify-center items-center" onClick={() => setShow(true)}>
              <div className="flex justify-center items-center text-white text-2xl font-bold relative">
                <img src={logo} alt="logo"

                  className={`w-28 md:w-44 object-cover transition-transform duration-300 ${show ? 'rotate-infinite' : ''}`}

                />

              </div>

              <div className="flex justify-center items-center text-white text-2xl font-bold absolute">
                <img src={text} alt="text" className="w-8 md:w-12 object-cover " />
              </div>

            </div>

            {show &&

              <Logos show={show} />

            }



          </div>
        </div>

      </div>

    </>

  );
};

export default Home;
