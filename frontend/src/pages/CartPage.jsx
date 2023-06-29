import React from 'react'
import TopNav from '../components/TopNav'
import BottomF from '../components/BottomF'

const CartPage = () => {
  return (
    <div>
    <TopNav/>
    <div className='container'>
    <ul class="list-group list-group-horizontal">
  <li class="list-group-item bg-black">
  <img src='https://t3.ftcdn.net/jpg/05/81/94/08/240_F_581940851_vrw6QHGEaHbM5V8mRsafjfWQXW0o7pZt.jpg'/>
  </li>
  <li class="list-group-item">Meat</li>
  <li class="list-group-item">R190</li>
</ul>
    </div>
    <BottomF/>
    </div>
  )
}

export default CartPage