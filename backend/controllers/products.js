const myproducts = [{
    id: 1,
    imgP: "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Beef burger",
    price: 125,
},
{
    id: 2,
    imgP: "https://images.unsplash.com/photo-1678124620664-8b86d2b7de36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Orange Juice",
    price: 315,
},
{
    id: 3,
    imgP: "https://images.unsplash.com/photo-1675790944856-ef756a57dd89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5Nnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Chicken bruger",
    price: 75,
},
{
    id: 4,
    imgP: "https://images.unsplash.com/photo-1675914850327-87b816de133e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Americano coffe",
    price: 60,
},
]

const findAllProducts = (req,res) => {
    res.status(200).json({data: myproducts});    
}

const findSingleProduct = (req,res) => {
    res.status(200).json({msg: "get my single product"});    
}

const addNewProducts = (req,res) => {
    res.status(200).json({msg: "add my new products"});    
}

const updateProduct = (req,res) => {
    res.status(200).json({msg: "update my products"});    
}

const deleteProduct = (req,res) => {
    res.status(200).json({msg: "delete my product"});    
}

module.exports = {findAllProducts, findSingleProduct, addNewProducts, updateProduct, deleteProduct};