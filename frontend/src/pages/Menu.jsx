import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomF from "../components/BottomF";

const Menu = ({name1,price1}) => {
  const [myMenu, setMyMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setMyMenu(data.data));
  }, []);

  console.log(myMenu);

  return (
    <div>
      <TopNav />
      <div className="container mt-5">
        <div
          className="menu-form mb-5"
          style={{ width: "100%", borderRadius: "10px" }}
        >
          <h3 className="text-center text-black mt-5">Our Menu</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
            <div className="col">
              <span className="text-black fst-italic">Burger</span>
            </div>
            <div className="col">
              <span className="text-black fst-italic">Kota</span>
            </div>
            <div className="col">
              <span className="text-black fst-italic">Dawgood</span>
            </div>
            <div className="col">
              <span className="text-black fst-italic">Drinks</span>
            </div>
            <div className="col">
              <span className="text-black">
                {name1} - R{price1}
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                3 Slices of bread with chips, vienna and russian - R45
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                2 Slices of bread with russia and beef burger - R50
              </span>
            </div>
            <div className="col">
              <span className="text-black">Americano coffee - R35</span>
            </div>
            <div className="col">
              <span className="text-black">
                {name1} - R{price1}
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                3 Slices of bread with chips, russian and burger - R75
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                2 Slices of bread with chips and chicken burger - R65
              </span>
            </div>
            <div className="col">
              <span className="text-black">Black coffee - R30</span>
            </div>
            <div className="col">
              <span className="text-black">
                {name1} - R{price1}
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                3 Slices of bread with chips, ham, vieena and russian - R55
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                2 Slices of bread with ham and beef burger - R65
              </span>
            </div>
            <div className="col">
              <span className="text-black">Coke 440ml - R35</span>
            </div>
            <div className="col">
              <span className="text-black">
                {name1} - R{price1}
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                3 Slices of bread with chips, chicken french and burger - R75
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                2 Slices of bread with tomatos and chicken burger - R55
              </span>
            </div>
            <div className="col">
              <span className="text-black">Sparking water 440ml - R20</span>
            </div>
            <div className="col">
              <span className="text-black">
                {name1} - R{price1}
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                3 Slices of bread with chips, ham, pork french, russian and
                burger - R85
              </span>
            </div>
            <div className="col">
              <span className="text-black">
                2 Slices of bread with cheese and beef burger - R70
              </span>
            </div>
            <div className="col">
              <span className="text-black">Orange juice - R30</span>
            </div>
          </div>
        </div>
      </div>
      <BottomF />
    </div>
  );
};

export default Menu;
