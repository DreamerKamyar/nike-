import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex  justify-center items-center flex-col gap-5">
      <img
        src={imgURL}
        className="rounded-full object-cover w-[120px] h-[120px]"
        alt=""
      />
      <p className="leading-normal max-w-sm info-text text-center">
        {feedback}
      </p>
      <div className="flex items-center justify-center gap-2">
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt=""
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mb-4 font-palanquin text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
