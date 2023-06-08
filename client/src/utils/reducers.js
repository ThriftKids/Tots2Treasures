import { useReducer } from "react";
import {
  UPDATE_POST,
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CURRENT_TAG,
  UPDATE_TAGS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_MULTIPLE_TO_CART:
      const updatedCart = [...state.cart, ...action.products];
      const uniqueCart = Array.from(new Set(updatedCart));
      return {
        ...state,
        cart: uniqueCart,
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    
    case UPDATE_TAGS:
      return {
        ...state,
        tags: [...action.tags],
        cartOpen: false,
        cart: [],
      };

    case UPDATE_CURRENT_TAG:
      return {
        ...state,
        currentTag: action.currentTag
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
