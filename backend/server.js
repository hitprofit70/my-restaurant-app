require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const myproducts = require('./router/products');
const mymenu = require('./controllers/menu');
const mydrinks = require('./controllers/drinks');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/products', myproducts);
app.use('/menu', mymenu);
app.use('/drinks', mydrinks);

app.get('/', (req,res) => {
    res.status(200).json({msg: "my server is working..."});
});

app.listen(PORT,() => {
    console.log(`msg: my server is running at the port on http://localhost:${PORT}`);
});