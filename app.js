const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get("/", (req, res, next) => {
    res.status(200).json({
        data: "HOME",
        msg: "HOME PAGE"
    })
})

app.listen(PORT, () => {
    console.log("listening to app", PORT)
})