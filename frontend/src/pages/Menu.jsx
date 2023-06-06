import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";

const Menu = () => {
  const [burger, setBurger] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/myburger")
      .then((response) => response.json())
      .then((data) => setBurger(data.data));
  }, []);

  console.log(burger);

  return (
    <div>
      <TopNav />
      <div className="container mt-5">
        <div
          className="menu-form bg-dark"
          style={{ width: "100%", height: "500px", borderRadius: "10px" }}
        >
          <h3 className="text-center text-light mt-5">Our Menu</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4 text-center mt-3">
            <div className="col">
              <span className="text-light fst-italic">Burger</span>
            </div>
            <div className="col">
              <span className="text-light fst-italic">Kota</span>
            </div>
            <div className="col">
              <span className="text-light fst-italic">Dawgood</span>
            </div>
            <div className="col">
              <span className="text-light fst-italic">Drinks</span>
            </div>
            <div className="col">
              <span className="text-light">
                {burger.name1} - R{burger.price1}
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                3 Slices of bread with chips, vienna and russian - R45
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                2 Slices of bread with russia and beef burger - R50
              </span>
            </div>
            <div className="col">
              <span className="text-light">Americano coffee - R35</span>
            </div>
            <div className="col">
              <span className="text-light">
                {burger.name1} - R{burger.price1}
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                3 Slices of bread with chips, russian and burger - R75
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                2 Slices of bread with chips and chicken burger - R65
              </span>
            </div>
            <div className="col">
              <span className="text-light">Black coffee - R30</span>
            </div>
            <div className="col">
              <span className="text-light">
                {burger.name1} - R{burger.price1}
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                3 Slices of bread with chips, ham, vieena and russian - R55
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                2 Slices of bread with ham and beef burger - R65
              </span>
            </div>
            <div className="col">
              <span className="text-light">Coke 440ml - R35</span>
            </div>
            <div className="col">
              <span className="text-light">
                {burger.name1} - R{burger.price1}
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                3 Slices of bread with chips, chicken french and burger - R75
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                2 Slices of bread with tomatos and chicken burger - R55
              </span>
            </div>
            <div className="col">
              <span className="text-light">Sparking water 440ml - R20</span>
            </div>
            <div className="col">
              <span className="text-light">
                {burger.name1} - R{burger.price1}
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                3 Slices of bread with chips, ham, pork french, russian and
                burger - R85
              </span>
            </div>
            <div className="col">
              <span className="text-light">
                2 Slices of bread with cheese and beef burger - R70
              </span>
            </div>
            <div className="col">
              <span className="text-light">Orange juice - R30</span>
            </div>
          </div>
        </div>
      </div>
      <BottomF />
    </div>
  );
};

export default Menu;
