import axios from "axios";
import {
  PRODCUT_DETAILS_SUCCESS,
  PRODCUT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAILS,
  PRODUCT_LIST_FAILS,
  PRODUCT_LIST_REQUEST,
} from "../constants/productconstant";
import { productDetailsReducer } from "../reducers/productRedusers";
export const listProduct = () => async (disptach) => {
  try {
    disptach({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/products`);
    disptach({
      type: PRODCUT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: PRODUCT_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (disptach) => {
  try {
    disptach({ type: productDetailsReducer });
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    disptach({ type: PRODCUT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    disptach({
      type: PRODUCT_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
