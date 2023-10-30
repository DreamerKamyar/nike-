import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 ">
      {services.map(function (serv) {
        return <ServiceCard key={serv.label} {...serv}></ServiceCard>;
      })}
    </section>
  );
};

export default Services;
