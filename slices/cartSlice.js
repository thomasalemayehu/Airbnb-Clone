import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  countedItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.countedItems = [
        ...new Map(state.items.map((v) => [v.id, v])).values(),
      ];
    },
    removeFromCart: (state, action) => {
      const indexOfItem = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newCart = [...state.items];

      if (indexOfItem >= 0) {
        newCart.splice(indexOfItem, 1);
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectCountItems = (state) => state.basket.countedItems;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price * 55, 0);

export const countedItems = (state) => state.basket.items.reduce(item);

export default cartSlice.reducer;
