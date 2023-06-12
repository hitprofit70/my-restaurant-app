import TopNav from '../components/TopNav';
import BotttomF from '../components/BottomF';
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const ViewProducts = () => {
  const {id} = useParams();
  const [myProducts,setMyProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/:id")
    .then((response) => response.json())
    .then((data) => setMyProducts(data.data))
  }, []);

  useEffect(() => {
    setMyProducts(() => {
      return myProducts.find((p) => p.id === Number(id));
    });
  }, [id]);

  return (
    <div>
      <TopNav/>
      <div className='container mt-5'>
      <div className="row">
            <Row>
              <Col style={{ width: "350px", height: "350px" }}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={myProducts.imgP}
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light">{myProducts.name}</h4>
                  <h6 className="border">R{myProducts.price}</h6>
                  <span className="border">Free Delivery</span>
                  <div className="">
                    {" "}
                    <button
                      className="add-button mt-3"
                      onClick={() => addToCart(myProducts)}
                    >
                      AddtoCart
                    </button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </div>
    
      </div>
      <BotttomF/>
    </div>
  )
}

export default ViewProducts
