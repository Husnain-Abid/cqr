import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Logos from "../components/Logos";




const Home = () => {


const [show, setShow] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center relative bg-gray-100">
      <div className="relative flex justify-center items-center">
        <div className="flex justify-center items-center ">

          {/* main Logo  */}
          <div className="flex justify-center items-center" onClick={()=>setShow(true)}>
            <div className="flex justify-center items-center text-white text-2xl font-bold">

              <img src={logo} alt="logo" />

            </div>
          </div>

          {show &&
          
          <Logos />
          
          }



        </div>
      </div>

    </div>
  );
};

export default Home;
