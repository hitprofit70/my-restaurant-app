import React, {useParams, useEffect} from 'react';
import TopNav from '../components/TopNav';
import BotttomF from '../components/BottomF';

const ViewProducts = () => {
    const { userId } = useParams();

    useEffect(() => {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => setMyMenu(data.data));
    }, []);

    useEffect(() => {
      setProducts(() => {
        return Productsdata.find((p) => p.id === Number(id));
      });
    }, [id]);
  return (
    <div>
      <TopNav/>
      <div className='container mt-5'>
    
      </div>
      <BotttomF/>
    </div>
  )
}

export default ViewProducts
