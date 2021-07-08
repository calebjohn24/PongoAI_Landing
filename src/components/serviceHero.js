import React, { useState, useEffect } from "react";
import "../styles/output.css";

function ServiceHero() {
  return (
    <div>
      <div className="my-6 md:my-8 relative h-96 md:h-128 mx-auto w-4/5 md:w-2/3 ">
        <div className="w-full absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-gray-50 shadow-xl h-96 md:h-128 border-yellow-500 border-2">
          <div className="p-2">
            <div className="w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-2 text-gray-600">
              Name
            </div>
            <div className="w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Service Customer
            </div>

            <div className="w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-4 text-gray-600">
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

            <div className="w-5/6 mx-auto p-1 font-semibold text-xs md:text-base mt-4 text-gray-600">
              How would you describe your experience?
            </div>
            <div className="w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              My service was mostly enjoyable, however
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