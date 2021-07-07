import React, { useState, useEffect } from "react";
import "./styles/output.css";

import ServiceHero from "./components/serviceHero";
import EcomHero from "./components/ecomHero";
import EventHero from "./components/eventHero";

function App() {
  const [showHero, setShowHero] = useState(0);

  function Hero(){
    if(showHero === 0){
      return <ServiceHero/>
    }
    else if(showHero === 1){
      return <EcomHero/>
    }
    else{
      return <EventHero/>
    }
  }

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="flex flex-wrap p-3 items-center content-center justify-items-start">
        <img
          src={"./logo.svg"}
          className="w-10 md:w-20 object-contain mx-2 md:mx-4"
          alt="logo"
        />

        <div className="text-lg md:text-xl text-indigo-500 font-bold">
          Pongo
        </div>
        <div className="text-lg md:text-xl text-yellow-500 font-bold">AI</div>
      </div>
      <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-xl mt-6 p-2">
        <div className="p-2 text-center text-sm md:text-lg text-gray-700 font-bold">
          Turn user feedback into actionable insights powered by AI
        </div>
        <div className="w-full">
          <div className="cursor-pointer w-1/3 bg-indigo-500 text-white text-center" onClick={() => setShowHero(0)}>
            For Products
          </div>

          <div className="cursor-pointer w-1/3 bg-indigo-500 text-white text-center" onClick={() => setShowHero(1)}>
            For Products
          </div>

          <div className="cursor-pointer w-1/3 bg-yellow-500 text-white text-center" onClick={() => setShowHero(2)}>
            For Venues
          </div>

        </div>

        <Hero/>
        
      </div>
    </div>
  );
}

export default App;
