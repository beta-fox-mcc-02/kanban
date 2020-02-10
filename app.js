const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const userRoute = require('./routes/UserRoute'); 

app.get('/', (req, res) => {
    res.status(201).json('Hello World')
})

app.use(userRoute);
  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))