import React, { useState, useEffect } from "react";
import "./styles/output.css";

import ServiceHero from "./components/serviceHero";
import EcomHero from "./components/storeHero";
import EventHero from "./components/venueHero";

function App() {
  const [showHero, setShowHero] = useState(0);

  const titles = ["Services", "Stores", "Venues"];

  function HeroChart() {
    if (showHero === 0) {
      return <ServiceHero />;
    } else if (showHero === 1) {
      return <EcomHero />;
    } else {
      return <EventHero />;
    }
  }

  function setHero(dirForward) {
    if (dirForward) {
      if (showHero > 1) {
        setShowHero(0);
      } else {
        setShowHero(showHero + 1);
      }
    } else {
      if (showHero < 1) {
        setShowHero(2);
      } else {
        setShowHero(showHero - 1);
      }
    }
  }

  return (
    <div className="w-screen min-h-screen bg-gray-60">
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

      <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-2xl mt-6 p-2">
        <div className="p-2 text-center text-sm md:text-lg text-gray-700 font-bold">
          Turn user feedback into actionable insights powered by AI
        </div>
        <div className="w-4/5 grid grid-cols-3 items-center align-middle mt-4 md:mt-6 mx-auto">
          <div
            onClick={() => setHero(false)}
            className="mx-auto cursor-pointer text-gray-600 transform hover:scale-105 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="1024"
              className="w-6 md:w-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
              />
            </svg>
          </div>
          <div className="text-gray-700 text-sm md:text-base mx-auto">
            {titles[showHero]}
          </div>
          <div
            onClick={() => setHero(true)}
            className="mx-auto cursor-pointer text-gray-600 transform hover:scale-105 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="1024"
              className="w-6 md:w-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </div>
        </div>

        <HeroChart />
      </div>

      <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-2xl mt-8 p-2">
        <div className="p-2 text-center text-sm md:text-lg text-gray-700 font-bold">
          Tailor feedback forms and surveys to your needs
        </div>

        </div>


        <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-2xl mt-8 p-2">
        <div className="p-2 text-center text-sm md:text-lg text-gray-700 font-bold">
          Automate feedback collection
        </div>
        
        </div>



        <div className="w-11/12 md:w-3/5 mx-auto bg-white shadow-2xl mt-8 p-2">
        <div className="p-2 text-center text-sm md:text-lg text-gray-700">
          Join the waitlist 
        </div>
        <div className="mx-auto mt-4 w-11/12 md:w-3/5">
        <div className="flex flex-wrap mx-auto items-center content-center justify-center"> 
        <form action="https://formspree.io/f/{form_id}" method="post">
   

  <input className="border-2 border-gray-500 focus:border-indigo-500 focus:outline-none ring-0 mr-2 p-1 text-gray-700 font-mono" placeholder="example@email.com" type={"email"} required/>
  <button className="bg-indigo-500 hover:bg-indigo-600 transform hover:scale-105 px-3 py-2 text-white" type="submit">
    Join
  </button>


</form>
</div>
        </div>
        
        </div>
  

      <footer className="mt-32 bg-gray-100 text-center p-2">
        <p className="text-gray-600 text-xs">© PongoAI 2021</p>
      </footer>
    </div>
  );
}

export default App;
