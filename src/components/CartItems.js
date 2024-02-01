import React, { useContext, useState } from "react";
import { MENU_IMG_URL } from "../utils/constants";
import veg from "../assets/images/veg.png";
import nonveg from "../assets/images/non-veg.png";
import AddButton from "./AddButton";
import { decrementCart, incrementCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();
  const incrementHandler = (itemName) => {
    dispatch(incrementCart(itemName));
  };

  const decrementHandler = (itemName) => {
    dispatch(decrementCart(itemName));
  };
  return (
    <div key={items} className="border-t border-x-gray-50">
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <div key={item?.card?.info?.id} data-testid="cartitem">
            <div className="w-full flex py-4 justify-between border-b border-x-gray-50">
              <div className="w-3/4 py-4 ">
                <div className="flex items-center ">
                  {item?.card?.info?.isVeg === 1 ? (
                    <img src={veg} alt="🟢" className="w-5 h-5 inline-block" />
                  ) : (
                    <img src={nonveg} alt="🔺" className="w-7 h-7" />
                  )}
                  {item?.card?.info?.isBestseller && (
                    <span className="pl-1 text-sm text-[#ee9c00] font-semibold">
                      ⭐️ Bestseller
                    </span>
                  )}
                </div>
                <h5 className="text-md font-semibold">
                  {item?.card?.info?.name}
                </h5>
                <p className="text-sm font-light">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.variantsV2?.variantGroups[0]
                        ?.variations[0]?.price}
                </p>
              </div>
              <div>
                <div className="relative py-8">
                  {item?.card?.info?.imageId ? (
                    <img
                      className="rounded-lg w-32 h-24 object-cover"
                      src={MENU_IMG_URL + item?.card?.info?.imageId}
                      alt="food-img"
                    />
                  ) : (
                    <div className="rounded-lg w-32 object-cover"></div>
                  )}
                  <div>
                    <div className="flex justify-between items-center  py-1 mt-6 border border-gray-300 absolute left-4 bottom-4  rounded-md z-10 bg-white  text-[#60b246]">
                      <div>
                        <button
                          className="text-xs font-semibold w-10"
                          onClick={() => decrementHandler(item)}
                        >
                          -
                        </button>
                      </div>

                      <div key={item?.card?.info?.id}>{item?.quantity}</div>

                      <div>
                        <button
                          className="text-xs font-semibold w-10"
                          onClick={() => incrementHandler(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItems;
