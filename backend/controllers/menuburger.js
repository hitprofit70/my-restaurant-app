const myburger = [
  {
    name1: "Chicken burger&two rolls with chips",
    price1: 100,
  },
  {
    name1: "Beef burger&two rolls with chips",
    price1: 140,
  },
  {
    name1: "Beef burger& two rolls with rib",
    price1: 133,
  },
  {
    name1: "Chicken burger&two rolls with rib",
    price1: 123,
  },
  {
    name1: "Chicken&Beef Burger&rolls with chips and rib",
    price1: 315,
  },
];

//data from Menu in frotend
const findAllBurger = (req, res) => {
  res.status(200).json({ data: myburger });
};

const findSingleBurger = (req, res) => {
  res.status(200).json({ data: "get my single burger" });
};

module.exports = { findAllBurger, findSingleBurger };
