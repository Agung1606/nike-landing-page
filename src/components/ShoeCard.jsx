import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (imgUrl.bigShoe !== bigShoeImg) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe && "border-coral-red"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-none"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
