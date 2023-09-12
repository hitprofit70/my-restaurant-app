import TopNav from '../components/TopNav'
import BottomF from '../components/BottomF'
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartPage = () => {
    return (
        <div>
            <TopNav />
            <div className='container mt-5'>
                <div className="items-group" style={{ height: "300px", width: "100%", borderRadius: "5px" }}>
                    <div className="container-fluid">
                        <div className="col-9">
                            <img src='https://t3.ftcdn.net/jpg/05/81/94/08/240_F_581940851_vrw6QHGEaHbM5V8mRsafjfWQXW0o7pZt.jpg' className='mt-3' style={{ borderRadius: "5px" }} />
                        </div>
                        <Row>
                        <Col style={{ width: "300px", height: "350px" }}>
                          <Stack className="text-center" gap={3}>
                            <h4 className="bg-dark text-light" style={{borderRadius: "5px", width: "250px"}}>Steak With Leave</h4>
                            <h6 className="border bg-dark text-light" style={{borderRadius: "5px", width: "250px"}}>R126</h6>
                          </Stack>
                        </Col>
                      </Row>
                    </div>        
                </div>
            </div>
            <BottomF />
        </div>
    )
}

export default CartPage