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
      <div className='container'>
        <div className='products-card'>
      {myDrinks.map((p, index) => (
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
      <BottomF/>
    </div>
  )
}

export default Drinks
