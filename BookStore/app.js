const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bookRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(` Server running on: http://localhost:${PORT}`);
   
});
