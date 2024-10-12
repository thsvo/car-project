import React from "react";

const ServiceCard = ({ title, header, dis }) => {
  return (
    <div className="max-w-4xl mx-auto text-center px-4 py-16">
      <p className="text-red-500 font-bold mb-4">{title}</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{header}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto capitalize">{dis}</p>
    </div>
  );
};

export default ServiceCard;
