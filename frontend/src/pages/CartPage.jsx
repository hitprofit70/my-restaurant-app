// import React from 'react'
import TopNav from '../components/TopNav'
import BottomF from '../components/BottomF'

const CartPage = () => {
  return (
    <div>
      <TopNav />
      <div className='container'>
        <div className='cart-details'>
          <div className='image-product'>
            <img src='https://t3.ftcdn.net/jpg/05/81/94/08/240_F_581940851_vrw6QHGEaHbM5V8mRsafjfWQXW0o7pZt.jpg' />
          </div>
          <ul>
          </ul>
          <li className="cart-item">Meat</li>
          <li className="cart-price">R190</li>
        </div>
      </div>
      <BottomF />
    </div>
  )
}

export default CartPage