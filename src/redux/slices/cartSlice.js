import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemsInCart = state.items.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      if (itemsInCart) {
        itemsInCart.quantity++;
      } else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItemFromCart: (state) => {
      const removeItem = state?.items?.filter(
        (item) => item?.card?.info?.id !== action.payload?.card?.info?.id
      );
      state.cart = removeItem;
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementCart: (state, action) => {
      const itemsInCart = state?.items?.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      itemsInCart.quantity++;
    },
    decrementCart: (state, action) => {
      const itemsInCart = state?.items?.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (itemsInCart.quantity === 1) {
        itemsInCart.quantity = 1;
      } else itemsInCart.quantity--;
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  clearCart,
  incrementCart,
  decrementCart,
} = cartSlice.actions;
export default cartSlice.reducer;
