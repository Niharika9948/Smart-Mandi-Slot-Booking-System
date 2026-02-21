const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    farmerId: String,
    marketId: String,
    date: String,
    slot: String,
    vehicleNo: String
});

module.exports = mongoose.model('Booking', bookingSchema);