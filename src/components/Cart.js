import { useSelector } from "react-redux";
import RestaurantMenuItem from "./RestaurantMenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mt-32 items-center p-4 flex flex-col justify-center">
      <h1 className="text-lg font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems && cartItems?.length > 0 ? (
          <>
            <button className="p-4 m-4">🗑</button>
            <RestaurantMenuItem items={cartItems} />
          </>
        ) : (
          <div>
            <h1>Your cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
