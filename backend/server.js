require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const myProducts = require('./router/products');
const myDrinks = require('./router/drinks');
const myFoods = require('./router/foods');
const myMenu = require('./router/menu');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/products', myProducts);
app.use('/drinks', myDrinks);
app.use('/foods',myFoods);
app.use('/menu', myMenu);

app.get('/', (req,res) => {
    res.status(200).json({msg: "my server is working..."});
});

app.listen(PORT,() => {
    console.log(`msg: my server is running at the port on http://localhost:${PORT}`);
});