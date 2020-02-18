"use strict"
if(process.env.NODE_ENV === 'development') require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Routes = require('./routes/index.js');
const errHandler = require('./middlewares/errHandler.js');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', Routes);
app.use(errHandler);

app.listen(port, _ => console.log(`Listening on port ${port}`))