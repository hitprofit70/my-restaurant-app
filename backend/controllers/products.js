const findAllProducts = (req,res) => {
    res.status(200).json({msg: "get all my products"});    
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