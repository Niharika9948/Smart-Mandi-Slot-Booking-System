const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mandiDB')
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// Routes
const farmerRoutes = require('./routes/farmerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const marketRoutes = require('./routes/marketRoutes');

app.use('/api/farmers', farmerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/markets', marketRoutes);

// Default Route (Test)
app.get('/', (req, res) => {
    res.send("🌾 Smart Mandi API Running...");
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});