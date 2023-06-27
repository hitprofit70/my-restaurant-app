import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import BottomF from '../components/BottomF';
import ProductsCard from '../components/ProductsCard';

const Foods = () => {
  const [myFoods, setMyFoods] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/foods")
    .then((response) => response.json())
    .then((data) => setMyFoods(data.data))
  }, []);

  return (
    <div>
      <TopNav/>
      <div className='container'>
        <div className='home-card'>
      {myFoods.map((p, index) => (
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

export default Foods
