import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="product" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">popular</span> products{" "}
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          dignissimos distinctio modi possimus voluptate enim facilis,
          necessitatibus aut fuga corrupti?
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-sm:items-center">
          {products.map(function (product) {
            return (
              <PopularProductCard
                key={product.name}
                {...product}
              ></PopularProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
