document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        farmerId: document.getElementById('farmerId').value,
        marketId: document.getElementById('marketId').value,
        date: document.getElementById('date').value,
        slot: document.getElementById('slot').value,
        vehicleNo: document.getElementById('vehicleNo').value
    };

    const res = await fetch('http://localhost:5000/api/bookings/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    alert("Booking Successful!");
});