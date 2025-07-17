import React from "react";
import leftImg from "../../assets/left-about-us.jpg";
import rightImg from "../../assets/right-about-us.jpg";

const AboutUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <span className="inline-block bg-white text-sm text-gray-800 font-medium px-4 py-1 rounded-lg shadow-md">
            About Us
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            Trusted & <span className="text-gray-400">Faster Logistic</span>
            <br />
            <span className="text-gray-400">Service Provider</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            KM Logistics Limited is a trusted and reliable logistics company with 4 years of combined industry experience. We provide professional trucking services across Canada, prioritizing honesty, integrity, and customer satisfaction—values often overlooked in today’s transport industry. At KM Logistics, we specialize in exceptional customer care, delivering friendly, knowledgeable service to every client and partner.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn btn-info px-10 py-3 text-white rounded-md font-medium transition duration-300">
              Get a quote
            </button>
            <button className="btn btn-neutral btn-outline px-10 py-3 rounded-md font-medium transition duration-300">
              Explore More
            </button>
          </div>
        </div>

        {/* Right images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src={leftImg}
            alt="Main Truck"
            className="row-span-2 rounded-lg object-cover object-right w-full h-full"
          />
          <img
            src={rightImg}
            alt="Truck Top View 1"
            className="rounded-lg object-cover w-full h-full"
          />
          <img
            src={rightImg}
            alt="Truck Top View 2"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
