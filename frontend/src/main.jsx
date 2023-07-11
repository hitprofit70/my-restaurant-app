import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import ViewProducts from './pages/ViewProducts';
import CartPage from './pages/CartPage';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/menupage",
    element: <Menu/>,
  },
  {
    path: "/drinkspage",
    element: <Drinks/>,
  },
  {
    path: "/foodspage",
    element: <Foods/>,
  },
  {
    path: "/viewproductspage/:id",
    element: <ViewProducts/>,
  },
  {
    path: "/cartpage",
    element: <CartPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
