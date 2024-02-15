import { GET } from "./api";
import { sliceItems } from "../utils/helper";
import {
  initializedApp,
  setItems,
  setSlicedItems,
  setItemsCategory,
  toggleLoader,
  setItemsError,
} from "../store/itemsSlice";
import { IOrderResult, IProduct } from "../models/models";
import { useAppDispatch } from "../hooks/redux";
import axios from "axios";

export default function useApi() {
  const dispatch = useAppDispatch();

  const init = function () {
    fetchItems();
    fetchItemsCategory();
    localStorage.setItem("currentCategory", "all");
  };

  const fetchItems = async function () {
    try {
      dispatch(toggleLoader(true));
      const products = await GET<IProduct[]>("products");
      if (products) {
        let slicedItems = sliceItems(products);
        dispatch(setSlicedItems(slicedItems));
        dispatch(setItems(products));
        dispatch(initializedApp());
        dispatch(toggleLoader(false));
      }
    } catch (e: any) {
      dispatch(toggleLoader(false));
      dispatch(setItemsError(e.message));
    }
  };

  const fetchItemsCategory = async function () {
    let category = await GET<Array<string>>("products/categories");
    if (category) dispatch(setItemsCategory(category));
  };

  const fetchSpetialCategory = async function (category?: string) {
    dispatch(toggleLoader(true));
    let product: IProduct[] | undefined;

    if (!category) {
      product = await GET<IProduct[]>("products");

      localStorage.setItem("currentCategory", "all");
    } else {
      product = await GET<IProduct[]>(`products/category/${category}`);
      localStorage.setItem("currentCategory", category);
    }

    if (product) {
      dispatch(setSlicedItems(sliceItems(product)));
    }

    dispatch(toggleLoader(false));
  };

  const postEmail = async function (result: IOrderResult) {
    const backendURL =
      process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

    try {
      const response = await axios.post(`${backendURL}/api/email`, result, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Server response:", response.data);
    } catch (e) {
      console.log(e as Error);
    }
  };

  return { init, fetchSpetialCategory, postEmail };
}
