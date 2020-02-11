const express = require("express");
const app = express();
const userRoute = require("./routes/user")
const cors = require("cors")
const PORT = process.env.PORT || 3000;
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(cors())

app.get("/", (req, res, next) => {
  res.send("Home page sementara")
});

app.use(userRoute)

app.listen(PORT, () => {
  console.log("listening to app", PORT);
});