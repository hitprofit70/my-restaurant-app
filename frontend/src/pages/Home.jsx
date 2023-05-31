import React from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";
import ImgSlide from "../components/ImgSlide";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  return (
    <div>
      <TopNav />
      <ImgSlide />
      <div className="container mt-5">
        <h1 className="animate__animated animate__fadeInUp animate__repeat-3 text-center">
          Welcome to Meek's Restaurant
        </h1>
      </div>
      <ProductsCard />
      <BottomF />
    </div>
  );
};

export default Home;
