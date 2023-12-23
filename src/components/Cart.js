import { useSelector } from "react-redux";
import RestaurantMenuItem from "./RestaurantMenuItem";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const totalAmount = cartItems.map((item) =>
    item?.card?.info?.price
      ? item?.card?.info?.price / 100
      : item?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price
  );

  const itemTotal = totalAmount.reduce((acc, curr) => acc + curr, 0);
  const gst = parseFloat(((itemTotal + 35 + 5) * 0.05).toFixed(2));
  const finalTotal = itemTotal + 35 + 5 + gst;

  return (
    <div className="items-center p-4 flex flex-col justify-center bg-gray-200 h-screen">
      <h1 className="text-lg font-bold p-4">SECURE CHECKOUT</h1>
      <div className="w-8/12 m-4 bg-white">
        {cartItems && cartItems?.length > 0 ? (
          <div className="flex">
            <div className="w-7/12 px-4">
              <CartItems items={cartItems} />
            </div>

            <div className="w-4/12 p-4 ml-16 border-l border-gray-400 text-gray-400 font-light text-sm">
              <div>
                <h3 className="py-2 text-gray-800 font-semibold">
                  Bill Details
                </h3>
                <div className="flex justify-between py-2">
                  <p>Item Total </p> <p>₹ {itemTotal}</p>
                </div>
                <div className="flex justify-between py-2">
                  <p>Delivery Fee | 1.5 kms </p>
                  <p>₹ 35</p>
                </div>
              </div>
              <div className="border-y border-gray-400 py-2">
                <p className="py-2 text-gray-800 font-semibold">Delivery Tip</p>
                <div className="flex justify-between py-2">
                  <p>Add tip Platform fee</p>
                  <p>₹ 5.00</p>
                </div>
                <div className="flex justify-between py-2">
                  <p>GST and Restaurant Charges</p>
                  <p>₹ {gst}</p>
                </div>
              </div>

              <div className="flex justify-between py-6 font-bold text-gray-800 border-t border-gray-800">
                <p> TO PAY</p>
                <p>₹{finalTotal}</p>
              </div>
            </div>
          </div>
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
