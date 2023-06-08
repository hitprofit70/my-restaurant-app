const myMenu = [
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

const findAllMenu = (req, res) => {
  res.status(200).json({ data: myMenu });
};

module.exports = { findAllMenu };
