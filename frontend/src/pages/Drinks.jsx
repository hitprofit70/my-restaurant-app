import React from 'react';
import TopNav from '../components/TopNav';
import BottomF from '../components/BottomF';
import ProductsCard from '../components/ProductsCard';
import { useState, useEffect } from 'react';

const Drinks = () => {
  const [myDrinks, setMyDrinks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
    .then((response) => response.json())
    .then((data) => setMyDrinks(data.data))
  }, []);

  console.log(myDrinks)
  return (
    <div>
      <TopNav/>
      {myDrinks.map((p, index) => (
              <ProductsCard
                key={index}
                id={p.id}
                name={p.name}
                imgP={p.imgP}
                price={p.price}
              />
            ))}
      <BottomF/>
    </div>
  )
}

export default Drinks
