import { create } from "zustand";
import axios from "axios";

const PRODUCTURL = "https://api.escuelajs.co/api/v1/products";
const CATEGORYURL = "https://api.escuelajs.co/api/v1/categories";
const PRODUCTDETAILSURL = `https://api.escuelajs.co/api/v1/products`;

const ProductStore = create((set) => ({
  ProductList: [],
  CategoryList: [],
  ProductDetails: null,

  ProductListRequest: async () => {
    try {
      const res = await axios.get(PRODUCTURL);

      if (res.data.length > 0) {
        set({ ProductList: res.data });
      } else {
        set({ ProductList: [] });
      }
    } catch (error) {
      console.log(error);
      set({ ProductList: [] });
    }
  },

  CategoryListRequest: async () => {
    try {
      const res = await axios.get(CATEGORYURL);
      if (res.data.length > 0) {
        set({ CategoryList: res.data });
      } else {
        set({ CategoryList: [] });
      }
    } catch (error) {
      console.log(error);
      set({ CategoryList: [] });
    }
  },

  ProductDetailsRequest: async (id) => {
    try {
      const res = await axios.get(`${PRODUCTDETAILSURL}/${id}`);

      if (res.data) {
        set({ ProductDetails: res.data });
      } else {
        set({ ProductDetails: null });
      }
    } catch (error) {
      console.log(error);
      set({ ProductDetails: null });
    }
  },
}));

export default ProductStore;
