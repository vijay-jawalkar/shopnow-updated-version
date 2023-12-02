import { createSlice } from "@reduxjs/toolkit";

const filerSlice = createSlice({
  name: "filter",
  initialState: {
    productsList: [],
    sortBy: null,
    ratings: null,
    category: null,
    bestSellerOnly: false,
    onlyInStock: false,
    initialList: [],
  },

  reducers: {
    initialProductList: function (state, action) {
      const updatedList = action.payload;
      return {
        ...state,
        productsList: updatedList,
        initialList: updatedList,
      };
    },

    clearFilter: function (state) {
      //  state.productsList = state.initialList
      return {
        ...state,
        productsList: state.initialList,
        sortBy: null,
        ratings: null,
        category: null,
        bestSellerOnly: false,
        onlyInStock: false,
      };
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;

      if (state.sortBy === "lowtohigh") {
        state.productsList = [...state.productsList].sort(
          (a, b) => a.price - b.price
        );
      }

      if (state.sortBy === "hightolow") {
        state.productsList = [...state.productsList].sort(
          (a, b) => b.price - a.price
        );
      }
    },

    setRatings: function (state, action) {
      state.ratings = action.payload;

      if (state.ratings === "4STARSABOVE") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (product) => product.rating >= 4
        );
      }

      if (state.ratings === "3STARSABOVE") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (product) => product.rating >= 3
        );
      }

      if (state.ratings === "2STARSABOVE") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (product) => product.rating >= 2
        );
      }

      if (state.ratings === "1STARSABOVE") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (product) => product.rating >= 1
        );
      }
    },

    categories: function (state, action) {
      state.category = action.payload;
      // const currentList = state.productsList.slice();

      if (state.category === "headphone") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "mobile") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "laptop") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (item) => item.category === state.category
        );
      }

      if (state.category === "tv") {
        state.productsList = state.initialList;
        state.productsList = state.productsList.filter(
          (item) => item.category === state.category
        );
      }
    },

    setBestSeller: function (state, action) {
      state.bestSellerOnly = action.payload;
      state.productsList = state.bestSellerOnly
        ? state.productsList.filter((product) => product.best_seller === true)
        : state.productsList;
    },

    setInStock: function (state, action) {
      state.onlyInStock = action.payload;
      state.productsList = state.onlyInStock
        ? state.productsList.filter((product) => product.in_stock === true)
        : state.productsList;
    },
  },
});

export const {
  initialProductList,
  setSortBy,
  setRatings,
  categories,
  setBestSeller,
  setInStock,
  clearFilter,
} = filerSlice.actions;
export const filterReducer = filerSlice.reducer;
