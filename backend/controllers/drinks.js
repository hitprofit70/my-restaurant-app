const findAllDrinks = (req, res) => {
  res.status(200).json({ data: "get all my drinks" });
};

module.exports = { findAllDrinks};
