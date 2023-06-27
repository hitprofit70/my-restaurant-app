import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";
import ImgSlide from "../components/ImgSlide";
import ProductsCard from "../components/ProductsCard";

const Home = () => {

  const [myProducts,setMyProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => setMyProducts(data.data))
  }, []);

  return (
    <div>
      <TopNav />
      <ImgSlide />
      <div className="container mt-5">
        <h1 className="animate__animated animate__fadeInUp animate__repeat-3 text-center">
          Welcome to Meek's Restaurant
        </h1>
        <div className="home-card">
        {myProducts.map((p, index) => (
              <ProductsCard
                key={index}
                id={p.id}
                name={p.name}
                imgP={p.imgP}
                price={p.price}
              />
            ))}
        </div>
      </div>
      <BottomF />
    </div>
  );
};

export default Home;
