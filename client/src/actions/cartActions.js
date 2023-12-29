import axios from "axios";
import { CART_ADD_ITEM, CART_ADD_REMOVE } from "../constants/cardContant";
import { json } from "react-router-dom";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._it,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItem))
};
