const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const error = require('./Middlewares/ErrorHandler')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())
app.use(routes)
app.use(error)


app.listen(port,() => {
    console.log("i love u " + port)
})