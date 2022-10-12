// Import enviroment variables
require('dotenv').config();

// Import Models
//require('./models');

// Import Express, Mongoose, Cors and Routes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const routes = require('./routes');

// Set Express
const app = express();

// Set Cors to access and set the format that the server will read the information (JSON)
app.use(cors());
app.use(express.json())


// Deploying the Server
app.listen(process.env.PORT, () => {
    console.log(`Server is working in the PORT: ${process.env.PORT}`);
});