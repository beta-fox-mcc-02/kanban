const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes/index')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use('/', routes )
// app.use(errorHandler)

app.listen(port, () => {
    console.log(`this app is running on port : ${port}`)
})