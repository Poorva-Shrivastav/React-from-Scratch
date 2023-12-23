import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart } from "../redux/slices/cartSlice";

const AddButtonQty = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const incrementHandler = (itemName) => {
    dispatch(incrementCart(itemName));
  };

  const decrementHandler = (itemName) => {
    dispatch(decrementCart(itemName));
  };
  return (
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
            item?.card?.info?.id === item?.card?.info?.id && (
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
  );
};

export default AddButtonQty;
