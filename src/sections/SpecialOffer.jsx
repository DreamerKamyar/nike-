import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          height={698}
          width={773}
          className="object-contain w-ful"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col xl:pl-48">
        <h2 className="mt-10 capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          we porvide you
          <br />
          <span className="text-coral-red mt-3">special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          veniam aperiam magnam! Eum quidem accusantium cupiditate placeat
          dolorum id consequatur amet harum fuga nihil sit corporis vero,
          blanditiis magni nisi.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          sapiente iusto sequi officia quidem voluptate, dignissimos ex autem.
          Error, officia?
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button
            lable="learn more"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          ></Button>
          <Button lable="shop now " iconURL={arrowRight}></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
