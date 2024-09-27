import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/slices/cartSlice";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button";

const CartCard = ({ id, image, name, category, price }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="border p-4 w-full justify-between flex rounded-lg mt-10 ">
      <div className="flex gap-5 items-center text-left">
        <div>
          <img
            src={image}
            alt={name}
            className="w-20 h-20 bg-imageBackground rounded-xl"
          />
        </div>
        <div>
          <p className="text-black text-xl font-bold">{name}</p>
          <p className="text-black text-lg font-normal">{category}</p>
        </div>
      </div>

      <div className="flex items-center text-left space-x-5">
        <div className="flex items-center space-x-2">
          <p className="text-black text-xl font-bold">{quantity}</p>
          <div className="flex flex-col items-center">
            <Button onClick={increaseQuantity} className="text-black ">
              <FaCaretUp className="text-lg" />
            </Button>
            <Button onClick={decreaseQuantity} className="text-black ">
              <FaCaretDown className="text-lg" />
            </Button>
          </div>
        </div>

        <div className="w-20">
          <p className="text-black text-xl font-bold">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>

        <div>
          <Button
            className="text-gray-500 cursor-pointer"
            onClick={handleRemoveFromCart}
          >
            <RiDeleteBin6Line className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
