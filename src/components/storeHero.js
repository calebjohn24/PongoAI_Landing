import React, { useState, useEffect } from "react";
import "../styles/output.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";



function EcomHero() {
  const data = [
    {
      subject: "Quality",
      A: 86,
      fullMark: 100,
    },
    {
      subject: "Fit",
      A: 24,
      fullMark: 100,
    },
    {
      subject: "Style",
      A: 80,
      fullMark: 100,
    },
  ];

  return (
    <div>
      <div className="my-6 md:my-8 relative h-96 md:h-128 mx-auto w-4/5 md:w-2/3 ">
        <div className="w-full absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-gray-50 shadow-xl h-96 md:h-128 border-2 border-black">
          <div className="p-2">
            <div className=" w-full p-1  text-xs md:text-base text-black text-right flex items-center content-end">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="1024"
                  className="w-6 md:w-8 mr-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"
                  />
                </svg>
              </div>
              <div>Clothing Store</div>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 text-gray-600">
              Name
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Store Customer
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 text-gray-600">
              Product Purchased
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Medium T-Shirt
            </div>

            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-4 text-gray-600">
              How would you rate your product?
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

            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 md:mt-4 text-gray-600">
              How would you describe your experience with your product?
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              I really liked the style and quality, but the sleeves were a
              little too tight.
            </div>
          </div>
        </div>
        <div className="w-full absolute top-2 md:top-3 left-2 md:left-3 z-10 bg-gray-100 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-2 border-2 border-indigo-400"></div>
        <div className="w-full absolute top-0 z-0 bg-gray-200 shadow-xl h-96 md:h-128 -translate-y-20 translate-x-4 border-2 border-yellow-400"></div>
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

      <div className="mt-4 mx-auto w-11/2 md:5/6">
      <div className="font-bold text-gray-500 text-xs md:text-sm w-full text-center">
              Product Feedback
            </div>
        <div className="w-full h-25vh mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="VenueChart"
                dataKey="A"
                stroke="#6366F1
"
                fill="#6366F1
"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

export default EcomHero;
