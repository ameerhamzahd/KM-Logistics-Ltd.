import React from "react";
import services1 from "../../assets/services1.jpg";
import services2 from "../../assets/services2.jpg";
import services3 from "../../assets/services3.jpg";

const services = [
  {
    id: 1,
    title: "Freight Forwarding",
    subtitle: "Freight Forwarding",
    image: services1,
  },
  {
    id: 2,
    title: "Distribution",
    subtitle: "Freight Forwarding",
    image: services2,
  },
  {
    id: 3,
    title: "Vehicle Transportation",
    subtitle: "Freight Forwarding",
    image: services3,
  },
];

const OurServices = () => {
  return (
    <section className="max-w-11/12 mx-auto px-4 lg:px-0 py-16">
      {/* Tag */}
      <div className="flex flex-col lg:flex-row justify-between">
      <div className="mb-8">
        <span className="bg-white shadow-md px-4 py-1 rounded-full text-sm font-medium">
          Our Services
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-12 max-w-2xl text-gray-400">
        <span className="text-black">Services that simplify</span> shipping,
        enhance efficiency, and support your business at every stage.
      </h2>

      <div></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-3"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover rounded-3xl shadow"
            />
            <h3 className="text-lg font-semibold text-black">
              {service.title}
            </h3>
            <p className="text-sm">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
