if (process.env.NODE_ENV === "development") require('dotenv').config()

//depedencies
const express = require('express')
const app = express()
const cors = require('cors')
const errHandler = require('./middlewares/errHandler')  

//port
const PORT = +process.env.PORT || 3000

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/', require('./routes'))
app.use(errHandler)


app.listen(PORT, () => console.log("I LOVE YOU", PORT))