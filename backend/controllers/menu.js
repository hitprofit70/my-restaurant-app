const myMenu = [
  {
    id: 21,
    name1: "Chicken burger&two rolls with chips",
    price1: 100,
  },
  {
    id: 22,
    name1: "Beef burger&two rolls with chips",
    price1: 140,
  },
  {
    id: 23,
    name1: "Beef burger& two rolls with rib",
    price1: 133,
  },
  {
    id: 24,
    name1: "Chicken burger&two rolls with rib",
    price1: 123,
  },
  {
    id: 25,
    name1: "Chicken&Beef Burger&rolls with chips and rib",
    price1: 315,
  },

  {
    id: 26,
    name1: "3 Slices of bread with chips, vienna and russian",
    price1: 45,
  },

  {
    id: 27,
    name1: "3 Slices of bread with chips, russian and burger",
    price1: 75,
  },

  {
    id: 28,
    name1: "3 Slices of bread with chips, ham, vieena and russian",
    price1: 55,
  },

  {
    id: 29,
    name1: "3 Slices of bread with chips, chicken french and burger",
    price1: 85,
  },

  {
    id: 30,
    name1: "3 Slices of bread with chips, ham, pork french, russian and burger",
    price1: 93,
  },
  {
    id: 31,
    name1: "2 Slices of bread with russia and beef burger ",
    price1: 50,
  },
  {
    id: 32,
    name1: "2 Slices of bread with chips and chicken burger",
    price1: 65,
  },
  {
    id: 33,
    name1: "2 Slices of bread with ham and beef burger",
    price1: 65,
  },
  {
    id: 34,
    name1: "2 Slices of bread with tomatos and chicken burger",
    price1: 55,
  },
  {
    id: 35,
    name1: "2 Slices of bread with cheese and beef burger",
    price1: 70,
  },
  {
    id: 36,
    name1: "Americano coffee",
    price1: 45,
  },
  {
    id: 37,
    name1: "Black coffee",
    price1: 40,
  },
  {
    id: 38,
    name1: "Coke 440ml",
    price1: 30,
  },
  {
    id: 39,
    name1: "Sparking water 440ml",
    price1: 27,
  },
  {
    id: 40,
    name1: "Orange juice",
    price1: 40,
  },
];

const findAllMenu = (req, res) => {
  res.status(200).json({ data: myMenu });
};

module.exports = { findAllMenu };
