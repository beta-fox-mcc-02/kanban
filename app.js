const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send(`Helloo world`)
})

app.listen(port, ()=>{})