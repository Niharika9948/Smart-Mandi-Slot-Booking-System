const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: String,
    location: String,
    capacity: Number
});

module.exports = mongoose.model('Market', marketSchema);