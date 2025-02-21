const express = require('express');
const router = express.Router();

// Mock data for cart
let cart = [];

// Get all items in the cart
router.get('/', (req, res) => {
    res.json(cart);
});

// Add an item to the cart
router.post('/', (req, res) => {
    const newItem = req.body;
    cart.push(newItem);
    res.status(201).json(newItem);
});

// Clear the cart
router.delete('/', (req, res) => {
    cart = [];
    res.status(204).send();
});

// Export the router
module.exports = router;
