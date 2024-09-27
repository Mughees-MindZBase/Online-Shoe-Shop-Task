import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice"; // Assuming this is the correct path
import heart from "../../assets/svg/heart.svg";
import stars from "../../assets/svg/stars.svg";
import Button from "../Button";

const ShoeCard = ({ id, image, name, price, category }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, name, price, category }));
  };

  return (
    <div className="bg-rightWitheColor rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg hover:border-purpleColor border border-transparent">
      <img src={image} alt={name} className="w-full h-[200px]" />
      <div className="flex">
        <Button
          className={
            "py-4 flex-1 flex items-center justify-center text-center bg-black text-rightWitheColor whitespace-nowrap hover:bg-gray-800 active:bg-gray-900 active:text-gray-300"
          }
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          className={
            "py-4 flex-1 flex items-center justify-center text-center bg-purpleColor text-rightWitheColor whitespace-nowrap"
          }
        >
          QUICK VIEW
        </Button>
      </div>
      <div className="flex justify-between px-2 py-3">
        <p className="text-black text-xl font-bold">{name}</p>
        <div className="flex items-center gap-1">
          <img src={heart} alt="Heart" className="w-5 h-5" />
          <p className="text-black text-xl font-bold">${price}</p>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-2 "></div>
      <div className="flex justify-between px-2 pt-3 pb-2">
        <p className="text-black text-lg font-normal italic">{category}</p>
        <div className="flex items-center gap-1">
          <img src={stars} alt="Stars" className="w-16 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
