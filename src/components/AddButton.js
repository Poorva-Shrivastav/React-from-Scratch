import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCart,
  incrementCart,
} from "../redux/slices/cartSlice";
import { useEffect, useState } from "react";

const AddButton = ({ item }) => {
  const [isCartBtn, setIsCartBtn] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const itemId = item?.card?.info?.id;

  const addHandler = (itemName) => {
    setIsCartBtn(true);
    dispatch(addToCart(itemName));
  };

  const incrementHandler = (itemName) => {
    dispatch(incrementCart(itemName));
  };

  const decrementHandler = (itemName) => {
    dispatch(decrementCart(itemName));
  };

  return (
    <div>
      {cartItems &&
      cartItems?.length > 0 &&
      cartItems.filter((item) => item?.card?.info?.id === itemId) &&
      isCartBtn ? (
        <div className="flex justify-between items-center  py-1 mt-6 border border-gray-300 absolute left-4 bottom-4  rounded-md z-10 bg-white  text-[#60b246]">
          <div>
            <button
              className="text-xs font-semibold w-10"
              onClick={() => decrementHandler(item)}
            >
              -
            </button>
          </div>
          {cartItems &&
            cartItems.map(
              (item) =>
                item?.card?.info?.id === itemId && (
                  <div key={item?.card?.info?.id}>{item?.quantity}</div>
                )
            )}

          <div>
            <button
              className="text-xs font-semibold w-10"
              onClick={() => incrementHandler(item)}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <div
          className="px-8 py-2 border border-gray-300 absolute left-4 bottom-6 rounded-md z-10 bg-white align-middle text-[#60b246] shadow-sm hover:shadow-lg"
          onClick={() => addHandler(item)}
        >
          <button className="text-xs font-semibold">ADD</button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
