import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import BottomF from '../components/BottomF';
import ProductsCard from '../components/ProductsCard';

const Foods = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/foods")
    .then((response) => response.json())
    .then((data) => setFoods(data.data))
  }, []);

  console.log(foods)

  return (
    <div>
      <TopNav/>
      {foods.map((p, index) => (
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

export default Foods
