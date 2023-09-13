import TopNav from '../components/TopNav'
import BottomF from '../components/BottomF'

const CartPage = () => {
    return (
        <div>
            <TopNav />
            <div className='container mt-5'>
                <div className="items-group" style={{ height: "300px", width: "100%", borderRadius: "5px" }}>
                    <div className="container-fluid">
                        <div className="col">
                            <img src='https://t3.ftcdn.net/jpg/05/81/94/08/240_F_581940851_vrw6QHGEaHbM5V8mRsafjfWQXW0o7pZt.jpg' className='mt-3' style={{ borderRadius: "5px" }} />
                        </div>
                        <div className=''>
                            <span className="text-center">
                                <h4 className="col item-name bg-dark text-light" style={{ borderRadius: "5px", width: "250px" }}>Steak With Leave</h4>
                                <h6 className="col item-price border bg-dark text-light" style={{ borderRadius: "5px", width: "250px" }}>R126</h6>
                            </span>
                            <button className='checkout-btn'>CheckOut</button>
                        </div>
                    </div>
                </div>
            </div>
            <BottomF />
        </div>
    )
}

export default CartPage