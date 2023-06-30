const myFoods = [
    {
      id: 13,
      imgP: "https://media.istockphoto.com/id/1192937910/photo/veal-tenderloin-with-sesonal-vegetables.webp?b=1&s=170667a&w=0&k=20&c=kC2_Q80NokqSZvCaL_4X5ZUtkmin1Vj9i_pANLaRlrY=",
      name: "Steak With Vegiee",
      price: 250,
    },
    {
      id: 14,
      imgP: "https://media.istockphoto.com/id/1176929739/photo/restaurant-plate-of-black-angus-beef-fillet-with-warm-potatoes-in-cheese-sauce-and-mushroom.webp?b=1&s=170667a&w=0&k=20&c=kPdoI7ImdL7UsuKosJjpUpAO4uhZit6JtVPycItxCbI=",
      name: "Fried Steak With Samp",
      price: 215,
    },
    {
      id: 15,
      imgP: "https://media.istockphoto.com/id/175409166/photo/lamb-and-aparagus.webp?b=1&s=170667a&w=0&k=20&c=ZRE-FpQMI_tmbacvLJdIn-eBk_r-kIocFeGkjLSgzmg=",
      name: "Soft Steak with Leave",
      price: 175,
    },
    {
      id: 16,
      imgP: "https://images.unsplash.com/photo-1606419420761-4f2aa891ed19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZhbmN5JTIwZm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Steak with Fried Onion",
      price: 319,
    },
    {
      id: 17,
      imgP: "https://media.istockphoto.com/id/1410844723/photo/delicious-juicy-cheeseburgers-served-with-french-fries.webp?b=1&s=170667a&w=0&k=20&c=OVYITEDJ_Xa_ZZHPoo0gHosya0uuvrDpmAZxdnH5DLM=",
      name: "Steak with fried Onion",
      price: 165,
    },
    {
      id: 18,
      imgP: "https://media.istockphoto.com/id/1154731746/photo/cheeseburger-with-cola-and-french-fries.webp?b=1&s=170667a&w=0&k=20&c=hsfpgn6yt64YXV2wJkrXVmDjqf4RydB2CDCSQNiD7Go=",
      name: "Bison Hamburger With Chips",
      price: 102,
    },
    {
      id: 18,
      imgP: "https://media.istockphoto.com/id/1254672762/photo/delicious-homemade-hamburger-and-french-fries.webp?b=1&s=170667a&w=0&k=20&c=a0kPiHhzTncW-_LdM7cXcLiB9KLXuEb8KAJt7AlVuO0=",
      name: "Avocado Cheeseburger",
      price: 130,
    },
    {
      id: 20,
      imgP: "https://media.istockphoto.com/id/872841180/photo/tasty-hamburger-with-french-fries-on-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=BhokM7B1EVtVVWW0dvhcN8mM7IgcpjhRUsHdJAUiNk4=",
      name: "Hamburger With French Fries",
      price: 135,
    },
  ];

const findAllFoods = (req,res) => {
    res.status(200).json({data: myFoods});
};

const findSingleFood = (req,res) => {
const id = parseInt(req.params.id)
let data = myFoods.find(myFood => myFood.id == id)

res.status(200).json({ data });

};

module.exports = {findAllFoods, findSingleFood};