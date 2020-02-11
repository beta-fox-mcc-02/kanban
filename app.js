const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { User } = require('./models')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('KANBAN API')
    console.log(process.env.DATABASE_URL)
    
    // User.findAll()
    //     .then(response => {
    //         res.status(200).json({
    //             msg: 'success fetch users',
    //             data: response
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.status(500).json(err)
    //     })
})

app.listen(port, () => {
    console.log('app running on port', port)
})