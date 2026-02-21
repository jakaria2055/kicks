import React from "react";
import Hero from "../components/Hero";
import NewDrops from "../components/NewDrops";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </>
  );
};

export default Home;
