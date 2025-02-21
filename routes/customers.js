const express = require('express');
const router = express.Router();

// Mock data for customers
let customers = [];

// Get all customers
router.get('/', (req, res) => {
    res.json(customers);
});

// Add a new customer
router.post('/', (req, res) => {
    const newCustomer = req.body;
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

// Export the router
module.exports = router;
