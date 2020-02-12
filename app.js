const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use('/', routes )
app.use(errorHandler)

app.listen(port, () => {
    console.log(`this app is running on port : ${port}`)
})