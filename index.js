const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, () => {console.log('connected to DB')});

app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/', require('./routes/PageRoutes.js'));
app.set('view engine', 'ejs');


app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});