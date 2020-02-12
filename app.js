const express = require("express");
const app = express();
const userRoute = require("./routes/user")
const taskRoute = require("./routes/task")
const cors = require("cors")
const errorHandler = require("./middlewares/errorHandler")
const PORT = process.env.PORT || 3000;
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(cors())

app.get("/", (req, res, next) => {
  res.status(200).json({
    data: "Home",
    msg: "masuk ke home page"
  });
});

app.use(userRoute)

app.use(taskRoute)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log("listening to app", PORT);
});