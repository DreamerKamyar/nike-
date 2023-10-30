import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="capitalize font-palanquin text-center text-4xl font-bold">
        what our <span className="text-coral-red ">cusotmers</span> say ?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center font-montserrat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        corrupti!
      </p>
      <div className="mt-24 flex  flex-1 justify-evenly  max-lg:flex-col gap-14">
        {reviews.map(function (review) {
          return (
            <ReviewCard key={review.customerName} {...review}></ReviewCard>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
