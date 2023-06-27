const myDrinks = [
  {
    id: 5,
    imgP: "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Apple Juice",
    price: 40,
  },
  {
    id: 6,
    imgP: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Summer Cocktail",
    price: 75,
  },
  {
    id: 7,
    imgP: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Grapefruit juice",
    price: 75,
  },
  {
    id: 8,
    imgP: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Kiwit Cocktial",
    price: 69,
  },
  {
    id: 9,
    imgP: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Several Cocktial",
    price: 60,
  },
  {
    id: 10,
    imgP: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "First Watch Whiskey",
    price: 102,
  },
  {
    id: 11,
    imgP: "https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Strawbeery Cocktial",
    price: 60,
  },
  {
    id: 12,
    imgP: "https://images.unsplash.com/photo-1541975902628-b157a9411603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxkcmlua3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tequila",
    price: 133,
  },
];

const findAllDrinks = (req, res) => {
  res.status(200).json({ data: myDrinks });
};

module.exports = { findAllDrinks };
