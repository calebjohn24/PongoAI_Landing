import React, { useState, useEffect } from "react";
import "../styles/output.css";

function ServiceHero() {
  return (
    <div>
      <div className="my-6 md:my-8 relative h-96 md:h-128 mx-auto w-4/5 md:w-2/3 ">
        <div className="w-full absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-gray-50 shadow-xl h-96 md:h-128 border-yellow-500 border-2">
          <div className="p-2">
          <div className=" w-full p-1 font-semibold text-xs md:text-base text-black text-right flex items-center content-end">
              <div>
                <svg xmlns= "http://www.w3.org/2000/svg" version="1.1" width="1024" className="w-6 md:w-8 mr-1"viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,5V6H15V5H9M22,18C22,18.53 21.79,19 21.4,19.41C21,19.81 20.55,20 20,20H4C3.45,20 3,19.81 2.6,19.41C2.21,19 2,18.53 2,18V14H7V15H9V14H15V15H17V14H22V18M4.5,7.22C4.84,6.41 5.45,6 6.33,6H7V5C7,4.45 7.18,4 7.57,3.59C7.96,3.2 8.44,3 9,3H15C15.56,3 16.04,3.2 16.43,3.59C16.82,4 17,4.45 17,5V6H17.67C18.55,6 19.16,6.41 19.5,7.22L21.58,12H17V11H15V12H9V11H7V12H2.42L4.5,7.22Z" />
                </svg>
              </div>
              <div> 
              Plumbing Company
              </div>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 text-gray-600">
              Name
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Service Customer
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 text-gray-600">
              Service Type
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
              </div>
            </div>

            <div className="w-11/12 md:w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 md:mt-4 text-gray-600">
              How would you describe your experience with our service?
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Service was great! Technician was on time and fixed my sink in less than hour.
            </div>
          </div>
        </div>
        <div className="w-full absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-gray-100 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-2 border-2 border-gray-700"></div>
        <div className="w-full absolute top-0 z-0 bg-gray-200 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-4 border-2 border-indigo-400"></div>
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
      <div className=""></div>
    </div>
  );
}

export default ServiceHero;
