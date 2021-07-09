import React from "react";

function AutomateHero() {
  return (
    <div className="mt-4 w-full">
        <div className="flex my-4 w-4/6 md:w-1/6 mx-auto content-center align-bottom justify-center">
            <div className="text-sm md:text-base mr-1 p-1 text-gray-700">For</div>
            <div className="text-sm md:text-base p-1 border-black border-2 font-mono">Product A</div>
        </div>
        <div className="text-center my-2 text-sm md:text-base">Send Follow-up</div>
          <div className="border-black w-4/6 md:w-1/6 mx-auto border-2">
          <div className="w-full h-6 md:h-8 text-gray-600 text-center font-mono">
                1
              </div>
              <div className="w-full h-6 md:h-8 bg-indigo-500 text-white text-center font-mono">
                2
              </div>
              <div className="w-full h-6 md:h-8 text-gray-600 text-center font-mono">
                3
              </div>

          </div>

          <div className="border-black w-4/6 md:w-1/6 mx-auto border-2 mt-6">
          <div className="w-full h-6 md:h-8 text-gray-600 text-center font-mono">
                Days
              </div>
              <div className="w-full h-6 md:h-8 bg-indigo-500 text-white text-center font-mono">
                Weeks
              </div>
              <div className="w-full h-6 md:h-8 text-gray-600 text-center font-mono">
                Months
              </div>

          </div>

          <div className="text-center my-3 text-sm md:text-base">After Purchase</div>

      </div>
  );
}



export default AutomateHero;