import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";
import MenuCard from "../components/MenuCard";

const Menu = () => {
  const [burger,setBurger] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/myBurger")
    .then((response) => response.json())
    .then((data) => setBurger(data.data))
  }, []);

  console.log(burger)
  return (
    <div>
      <TopNav />
      <div className="container mt-5">
        {burger.map((p,index) => (
            <MenuCard
            key={index}
            name1={p.name1}
            price1={p.price1}
            />
        ))}
    
      </div>
      <BottomF />
    </div>
  );
};

export default Menu;
