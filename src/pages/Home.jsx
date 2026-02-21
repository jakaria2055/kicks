import React, { useEffect } from "react";
import Hero from "../components/Hero";
import NewDrops from "../components/NewDrops";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";
import ProductStore from "../store/ProductStore";

const Home = () => {
  const { ProductList, ProductListRequest, CategoryList, CategoryListRequest } = ProductStore();

  // FETCH ALL PRODUCTS & CATEGORIES
  useEffect(() => {
    (async () => {
      await ProductListRequest();
      await CategoryListRequest();
    })();
  }, [ProductListRequest, CategoryListRequest]);


  return (
    <>
      <Hero />
      <NewDrops product={ProductList} />
      <Categories categories={CategoryList}/>
      <Reviews />
    </>
  );
};

export default Home;
