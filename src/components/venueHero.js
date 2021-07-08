import React, { useState, useEffect } from "react";
import "../styles/output.css";

function EventHero() {
  return (
    <div>
      <div className="my-6 md:my-8 relative h-96 md:h-128 mx-auto w-4/5 md:w-2/3 ">
        <div className="w-full absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-gray-50 shadow-xl h-96 md:h-128 border-2 border-indigo-500">
          <div className="p-2">
          <div className=" w-full p-1 font-semibold text-xs md:text-base text-black text-right flex items-center content-end">
              <div>
                <svg xmlns= "http://www.w3.org/2000/svg" version="1.1" width="1024" className="w-6 md:w-8 mr-1"viewBox="0 0 24 24">
                <path fill="currentColor" d="M15 9H17V11H15V9M17 5H15V7H17V5M11 15H13V13H11V15M13 5H11V7H13V5M11 11H13V9H11V11M9 5H7V7H9V5M9 9H7V11H9V9M14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21M7 19H9V17H7V19M9 13H7V15H9V13M22 16.5C22 19.1 18.5 23 18.5 23S15 19.1 15 16.5C15 14.6 16.6 13 18.5 13S22 14.6 22 16.5M19.7 16.6C19.7 16 19.1 15.4 18.5 15.4S17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8S19.8 17.2 19.7 16.6Z" />
                </svg>
              </div>
              <div> 
              Hotel
              </div>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 text-gray-600">
              Name
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Hotel Guest
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 text-gray-600">
              Room Type
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Suite
            </div>
            

            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-4 text-gray-600">
              How would you rate your experience?
            </div>
            <div className="w-5/6 mx-auto p-1 mt-1">
              <div className="grid grid-cols-5 gap-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1024"
                    className="w-5/6 text-yellow-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke={"#000000"}
                      strokeWidth={"0.5px"}
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1024"
                    className="w-5/6 text-yellow-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke={"#000000"}
                      strokeWidth={"0.5px"}
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1024"
                    className="w-5/6 text-yellow-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke={"#000000"}
                      strokeWidth={"0.5px"}
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1024"
                    className="w-5/6 text-yellow-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke={"#000000"}
                      strokeWidth={"0.5px"}
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="1024"
                    className="w-5/6 text-gray-100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      stroke={"#000000"}
                      strokeWidth={"0.5px"}
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 md:mt-4 text-gray-600">
              How would you describe your experience with our hotel?
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Fridge was broken, other than that my stay was great, and I enjoyed the pool.
            </div>
          </div>
        </div>
        <div className="w-full absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-gray-100 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-2 border-2 border-yellow-400"></div>
        <div className="w-full absolute top-0 z-0 bg-gray-200 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-4 border-2 border-gray-700"></div>
      </div>

      <div className="mt-16 mx-auto w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="1024"
          className="animate-bounce w-8 md:w-10 text-indigo-500 mx-auto"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
          />
        </svg>
      </div>

    </div>
  );
}

export default EventHero;
