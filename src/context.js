import React from "react";
export const ProductContext = React.createContext();
export const initialState = {
  products: [],
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "MOVE": {
      const productId = action.payload.id;
      const product = state.products.find((p) => p.id === productId);
      if (!product) return state;

      const existingProductInBasket = state.basket.find(
        (p) => p.id === productId
      );

      return {
        ...state,
        basket: existingProductInBasket
          ? state.basket.map((item) =>
              item.id === productId ? { ...item, count: item.count + 1 } : item
            )
          : [...state.basket, { ...product, count: 1 }],
      };
    }
    case "INCREMENT":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.payload.id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    case "REMOVE":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      };
    case "APPLY_SALE":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.count > 3
            ? {
                ...item,
                price: Math.floor((item.price * (item.count - 1)) / item.count),
              }
            : item
        ),
        saleApplied: true,
      };
    default:
      return state;
  }
};
