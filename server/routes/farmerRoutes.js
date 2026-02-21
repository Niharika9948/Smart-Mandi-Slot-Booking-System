const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

// ➤ Add Farmer
router.post('/add', async (req, res) => {
    try {
        const farmer = new Farmer(req.body);
        await farmer.save();
        res.send("Farmer Added Successfully");
    } catch (err) {
        res.status(500).send(err);
    }
});

// ➤ Get All Farmers
router.get('/', async (req, res) => {
    try {
        const farmers = await Farmer.find();
        res.json(farmers);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;