const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const indexRouter = require('./routes/indexRouter.js')
const errHandler = require('./middlewares/errHandler.js')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use(indexRouter)
app.use(errHandler)

app.listen(port, ()=>{})