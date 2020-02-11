const express = require("express");
const app = express();
const userRoute = require("./routes/user")
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.get("/", (req, res, next) => {
  res.status(200).json({
    data: "Home",
    msg: "masuk ke home page"
  });
});

app.use(userRoute)

app.listen(PORT, () => {
  console.log("listening to app", PORT);
});