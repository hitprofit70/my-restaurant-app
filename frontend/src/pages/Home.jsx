import { useState,useEffect } from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";
import ImgSlide from "../components/ImgSlide";
import ProductsCard from "../components/ProductsCard";
import { useParams } from "react-router-dom";

const Home = () => {

  const [myProducts,setMyProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
    .then((response) => response.json())
    .then((data) => setMyProducts(data.data))
  }, []);

  return (
    <div>
      <TopNav />
      <ImgSlide />
      <div className="container mt-5">
        <h1 className="animate__animated animate__fadeInUp animate__repeat-3 text-center">
          Welcome to Meek Restaurant
        </h1>
        <div className="home-card">
       {myProducts.map((product, index) =>{
       <ProductsCard
       key={index}
       id={product.id}
       imgP={product.imgP}
       name={product.name}
       price={product.price}
       />
       })}
        </div>
      </div>
      <BottomF />
    </div>
  );
};

export default Home;
