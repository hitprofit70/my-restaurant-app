import TopNav from '../components/TopNav';
import BotttomF from '../components/BottomF';
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [myDrinks, setrMyDrinks] = useState([]);
  const [myFoods, setMyFoods] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setMyProducts(data.data))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/drinks/${id}`)
      .then((response) => response.json())
      .then((data) => setrMyDrinks(data.data))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((response) => response.json())
      .then((data) => setMyFoods(data.data))
  }, []);

  return (
    <div>
      <TopNav />
      <div className='container mt-5'>
        {myProducts && (
          <div className="row">
            <Row>
              <Col style={{ width: "300px", height: "350px", borderRadius: "5px" }}>
                <img
                  style={{ width: "90%", height: "300px", borderRadius: "5px" }}
                  src={myProducts.imgP}
                  alt="First slide"
                />
              </Col>
              <Col style={{ width: "300px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light" style={{borderRadius: "5px"}}>{myProducts.name}</h4>
                  <h6 className="border bg-dark text-light" style={{borderRadius: "5px"}}>R{myProducts.price}</h6>
                  <span className="border bg-dark text-light" style={{borderRadius: "5px"}}>Free Delivery</span>
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
        {myDrinks && (
          <div className="row">
            <Row>
              <Col style={{ width: "350px", height: "350px", borderRadius: "5px" }}>
                <img
                  style={{ width: "100%", height: "300px", borderRadius: "5px"}}
                  src={myDrinks.imgP}
                  alt="First slide"
                />
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light" style={{borderRadius: "5px"}}>{myDrinks.name}</h4>
                  <h6 className="border bg-dark text-light" style={{borderRadius: "5px"}}>R{myDrinks.price}</h6>
                  <span className="border bg-dark text-light" style={{borderRadius: "5px"}}>Free Delivery</span>
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
        {myFoods && (
          <div className="row">
            <Row>
              <Col style={{ width: "350px", height: "350px", borderRadius: "5px" }}>
                <img
                  style={{ width: "100%", height: "300px", borderRadius: "5px" }}
                  src={myFoods.imgP}
                  alt="First slide"
                />
              </Col>
              <Col style={{ width: "350px", height: "350px" }}>
                <Stack className="text-center mr-5 mt-3 mb-3" gap={3}>
                  <h4 className="bg-dark mr-5 text-light" style={{borderRadius: "5px"}}>{myFoods.name}</h4>
                  <h6 className="border bg-dark text-light" style={{borderRadius: "5px"}}>R{myFoods.price}</h6>
                  <span className="border bg-dark text-light" style={{borderRadius: "5px"}}>Free Delivery</span>
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
