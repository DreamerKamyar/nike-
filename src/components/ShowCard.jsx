import React from "react";

const ShowCard = ({ imgURL, changeBigShowImage, bigShowImage }) => {
  const handleClick = () => {
    if (bigShowImage !== imgURL.bigShoe) {
      changeBigShowImage(imgURL.bigShoe);
    }
  };
  console.log(bigShowImage);
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShowImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} width={127} height={103} alt="" />
      </div>
    </div>
  );
};

export default ShowCard;
