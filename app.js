if (process.env.NODE_ENV === 'development') require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log('masuk app');
app.use(router);


app.listen(PORT, () => console.log(`Listen to port ${PORT}`));