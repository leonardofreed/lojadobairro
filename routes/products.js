const express = require('express');
const router = express.Router();

let products = [
    {
        nome: "Pizza Margherita",
        descricao: "Pizza clássica com molho de tomate e queijo mozzarella.",
        preco: 29.90,
        disponibilidade: true
    },
    {
        nome: "Hambúrguer",
        descricao: "Hambúrguer suculento com queijo e bacon.",
        preco: 19.90,
        disponibilidade: true
    },
    {
        nome: "Coca-Cola",
        descricao: "Refrigerante de cola, 350ml.",
        preco: 5.00,
        disponibilidade: true
    }
];


// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Add a new product
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Export the router
module.exports = router;
