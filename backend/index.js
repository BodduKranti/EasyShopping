const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

PORT = process.env.PORT || 4002
app.listen(PORT, () => {
    console.log(`This Project is running on ${PORT}`)
})