import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DashBoardLayout from "../../../dashboardLayout";
import { RiArrowLeftSLine } from "react-icons/ri";

import CartCard from "../../../components/CartCard";
import profileImg from "../../../assets/svg/profilePic.svg";
import maetrCard from "../../../assets/svg/masterCard.svg";
import visaCard from "../../../assets/svg/visaCard.svg";
import rePayCard from "../../../assets/svg/ruPayCard.svg";
import InputField from "../../../components/EmailInput";

const MyCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <DashBoardLayout>
        <div className="mx-5 mt-10 bg-rightWitheColor justify-between flex rounded-xl">
          <div className="flex-grow p-4 mr-2 border" style={{ flex: "2 1 0%" }}>
            <div className="flex-grow">
              <Link
                to={"/dashboard"}
                className="flex text-black text-2xl items-center pt-5"
              >
                <RiArrowLeftSLine />
                Shopping Continue
              </Link>
              <hr className="my-4 border-t-2 border-gray-300 w-[50%]" />
              <p className="text-black text-xl font-bold">Shopping Cart</p>
              <p className="text-black text-sm font-normal">
                You have {cartItems.length} items in your cart
              </p>

              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className="bg-purpleColor m-5 p-6 rounded-xl max-w-md  text-white">
            <div className="w-full  flex items-center justify-between">
              <p className="text-xl font-semibold">Card Details</p>
              <img src={profileImg} />
            </div>
            <div className="my-8">
              <label className="block mb-2">Card type</label>
              <div className="flex space-x-4">
                <div className=" rounded">
                  <img src={maetrCard} />
                </div>
                <div className="bg-whiterounded">
                  <img src={visaCard} />
                </div>
                <div className="  rounded flex items-center justify-center">
                  <img src={rePayCard} />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Name on card</label>

              <InputField
                type="text"
                placeholder="Name"
                className=" w-full bg-cardInputBackground placeholder:text-white pl-4"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Card Number</label>
              <InputField
                type="text"
                placeholder="111 2222 3333 4444"
                className=" w-full bg-cardInputBackground placeholder:text-white pl-4"
              />
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label className="block mb-2">Expiration date</label>
                <InputField
                  type="text"
                  placeholder="mm/yy"
                  className=" w-full bg-cardInputBackground placeholder:text-white pl-4"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">CVV</label>
                <InputField
                  type="text"
                  placeholder="123"
                  className=" w-full bg-cardInputBackground placeholder:text-white pl-4"
                />
              </div>
            </div>
            <div className="mb-4 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$1,668</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$4</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total (Tax incl.)</span>
                <span>$1,672</span>
              </div>
            </div>
            <button className="w-full bg-cardInputBackground p-3 rounded-lg text-xl font-bold flex items-center justify-between">
              <span>$1,672</span>
              <span className="flex items-center">
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default MyCart;
