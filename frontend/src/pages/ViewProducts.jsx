import TopNav from '../components/TopNav';
import BotttomF from '../components/BottomF';
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from 'react';

const ViewProducts = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products/2')
      .then((response) => response.json())
      .then((data) => setMyProducts(data.data))
  }, []);

  return (
    <div>
      <TopNav />
      <div className='container mt-5'>
        {myProducts && (
          <div className="row">
            <Row>
              <Col style={{ width: "20px", height: "350px" }}>
                <Card>
                  <img
                    style={{ width: "100%", height: "300px" }}
                    src={myProducts.imgP}
                    alt="First slide"
                  />
                </Card>
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light">{myProducts.name}</h4>
                  <h6 className="bg-dark border text-light">R{myProducts.price}</h6>
                  <span className="bg-dark border text-light">Free Delivery</span>
                  <div className="">
                    <button
                      className="add-button mt-3 animate__heartBeat"
                    >
                      AddtoCart
                    </button>
                  </div>
                </Stack>
              </Col>
            </Row>
          </div>
        )}
      </div>
      <BotttomF />
    </div>
  )
}

export default ViewProducts
