if(process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = +process.env.PORT
const routes = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Cashback OVO Jaya Rp. ${PORT.toLocaleString()}`)
})