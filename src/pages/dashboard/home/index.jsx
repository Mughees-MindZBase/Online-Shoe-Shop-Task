import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DashBoardLayout from "../../../dashboardLayout";
import { IoCartOutline } from "react-icons/io5";
import Button from "../../../components/Button";
import offer from "../../../assets/svg/offer.svg";
import offImage from "../../../assets/svg/off.svg";
import ShoeCard from "../../../components/ShoeCard";
import CircularIndeterminate from "../../../components/loader/circular";

const DashboardHome = () => {
  const products = useSelector((state) => state.products);
  const cartItemsCount = useSelector((state) => state.cart.length);
  const [loading, setLoading] = useState(true);
  const offerButtonRef = useRef(null);
  const offButtonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderImageSource =
      "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)";
    e.currentTarget.style.borderWidth = "4px";
    e.currentTarget.style.borderStyle = "solid";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderImageSource = "none";
    e.currentTarget.style.borderWidth = "0px";
  };

  if (loading) {
    return (
      <div className="flex justify-center bg-rightWitheColor items-center h-screen">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <>
      <DashBoardLayout>
        <div>
          <div className="p-4 flex justify-end items-center">
            <Link
              to={"/mycart"}
              className="py-4 px-8 flex items-center justify-center gap-2 rounded-full bg-rightWitheColor text-black hover:bg-purpleColor hover:text-white"
            >
              <span
                className="flex items-center justify-center"
                style={{ width: "24px", height: "24px" }}
              >
                <IoCartOutline style={{ width: "100%", height: "100%" }} />
                {cartItemsCount > 0 && (
                  <span
                    className="absolute top-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
                    style={{ width: "16px", height: "16px" }}
                  >
                    {cartItemsCount}
                  </span>
                )}
              </span>
              <span className="flex items-center">My Cart</span>
            </Link>
          </div>
          <div>
            <div className="flex gap-5 px-5">
              <Button
                ref={offerButtonRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative p-2 rounded-md transition-all"
              >
                <img src={offer} className="w-full h-full" alt="Offer" />
              </Button>

              <Button
                ref={offButtonRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative p-2 rounded-md transition-all"
              >
                <img src={offImage} className="w-full h-full" alt="Off" />
              </Button>
            </div>

            <div className="w-full px-7 py-5 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-5">
              {products.map((shoe, index) => (
                <ShoeCard
                  key={shoe.id}
                  id={shoe.id}
                  image={shoe.image}
                  name={shoe.name}
                  price={shoe.price}
                  category={shoe.category}
                />
              ))}
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default DashboardHome;
