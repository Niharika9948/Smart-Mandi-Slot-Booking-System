const express = require('express');
const router = express.Router();
const Market = require('../models/Market');

// ➤ Add Market
router.post('/add', async (req, res) => {
    try {
        const market = new Market(req.body);
        await market.save();
        res.send("Market Added Successfully");
    } catch (err) {
        res.status(500).send(err);
    }
});

// ➤ Get All Markets
router.get('/', async (req, res) => {
    try {
        const markets = await Market.find();
        res.json(markets);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;