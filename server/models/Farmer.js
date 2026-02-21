const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    location: String
});

module.exports = mongoose.model('Farmer', farmerSchema);