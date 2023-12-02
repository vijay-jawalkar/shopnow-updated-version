import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },

  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total: total, cartList: updatedCartList };
    },

    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, total: total, cartList: updatedCartList };
    },

    clearCart(state) {
      const updatedCartList = [];
      const total = 0;
      return { ...state, cartList: updatedCartList, total: total };
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
