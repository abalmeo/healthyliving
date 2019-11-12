const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

//Connect DB
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  // Set static doler
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

//Start Server
app.listen(PORT, () => console.log(`Serving running on port ${PORT}`));
