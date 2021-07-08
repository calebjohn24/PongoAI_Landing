import React, { useState, useEffect, PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import "../styles/output.css";

const dataBar = [
  {
    name: 'Timely',
    responses: 922,
  },
  {
    name: 'Professional',
    responses: 442,
  },
  {
    name: 'Quality',
    responses: 801,
  },

];

const data = [
  { name: "Yes", value: 710 },
  { name: "No", value: 134 },
];

const COLORS = ["#10B981", "#EF4444"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index]['name']}
    </text>
  );
};

function ServiceHero() {
  return (
    <div>
      <div className="my-6 md:my-8 relative h-96 md:h-128 mx-auto w-4/5 md:w-2/3 ">
        <div className="w-full absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-gray-50 shadow-xl h-96 md:h-128 border-yellow-500 border-2">
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
                    d="M9,5V6H15V5H9M22,18C22,18.53 21.79,19 21.4,19.41C21,19.81 20.55,20 20,20H4C3.45,20 3,19.81 2.6,19.41C2.21,19 2,18.53 2,18V14H7V15H9V14H15V15H17V14H22V18M4.5,7.22C4.84,6.41 5.45,6 6.33,6H7V5C7,4.45 7.18,4 7.57,3.59C7.96,3.2 8.44,3 9,3H15C15.56,3 16.04,3.2 16.43,3.59C16.82,4 17,4.45 17,5V6H17.67C18.55,6 19.16,6.41 19.5,7.22L21.58,12H17V11H15V12H9V11H7V12H2.42L4.5,7.22Z"
                  />
                </svg>
              </div>
              <div>Plumbing Company</div>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 text-gray-600">
              Name
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Service Customer
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-4 text-gray-600">
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
            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 text-gray-600">
              Were we able to fix your problem today?
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto mt-1 md:mt-2 grid grid-cols-2 gap-2">
              <div className="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="1024"
                  className="w-5 md:w-8 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
                  />
                </svg>
              </div>
              <div className="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="1024"
                  className="w-5 md:w-8  text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-11/12 md:w-5/6 mx-auto p-1  text-xs md:text-base mt-2 md:mt-4 text-gray-600">
              How would you describe your experience with our service?
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto border-2 border-black p-1 font-mono text-xs md:text-sm mt-1">
              Service was great! Technician was on time and fixed my sink in
              under than hour.
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

      <div className="mt-4 mx-auto w-11/12 md:5/6">
        <div className="mx-auto h-full">
          <div className="mx-auto h-full w-full">
            <div className="font-bold text-gray-500 text-xs md:text-sm w-full text-center">
              Was the customer's problem resolved?
            </div>
            <div className="mx-auto h-25vh w-full mt-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart >
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#000000"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip coordinate={{ x: 2, y: 3 }} />
              </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mx-auto">
            <div className="font-bold text-gray-500 text-xs md:text-sm w-full text-center mt-4 md:mt-0">
              What Customers liked
            </div>
            <div className="h-25vh w-full md:w-3/5 mt-2 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
          data={dataBar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="responses" fill="#6366F1" background={{ fill: '#eee' }} />
        </BarChart>
        </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
