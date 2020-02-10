const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get('/', (req,res,next)=>{
  res.status(200).json({
    kata : "Hello World"
  })
})

app.listen(PORT, ()=>console.log('connected on ', PORT))