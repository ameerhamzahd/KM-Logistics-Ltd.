// CarrierOptions.jsx
import React from "react";
import { FaGlobe, FaShippingFast } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import ship from "../../assets/ship.jpg";
import plane from "../../assets/plane.jpg";
import truck from "../../assets/truck.jpg";
import { BiSolidPlaneAlt } from "react-icons/bi";

const carrierData = [
  {
    id: 1,
    title: "Sea",
    number: "01",
    icon: <FaShip className="text-white text-2xl border rounded-full p-1" />,
    image: ship,
  },
  {
    id: 2,
    title: "Air",
    number: "02",
    icon: <BiSolidPlaneAlt className="text-white text-2xl border rounded-full p-1" />,
    image: plane,
  },
  {
    id: 3,
    title: "Land",
    number: "03",
    icon: <FaShippingFast className="text-white text-2xl border rounded-full p-1" />,
    image: truck,
  },
];

const CarrierOptions = () => {
  return (
    <section className="px-4 lg:px-0 py-16 max-w-11/12 mx-auto bg-[#f7f3fa] rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-white text-sm text-gray-800 font-medium px-4 py-1 rounded-full shadow-md">
          Carrier Options
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 text-gray-900">
          Seamless Cargo Transportation
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-3">
          Explore the wide range of vehicles and transportation modes we operate to offer flexible, reliable logistics solutions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {carrierData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
              <div className="absolute top-4 left-4 flex gap-2 items-center text-white text-lg">
                <FaGlobe />
                {item.icon}
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                {item.title}
              </div>
              <div className="absolute bottom-4 right-4 text-white text-lg font-medium">
                {item.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierOptions;
