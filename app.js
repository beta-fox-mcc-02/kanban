const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.get("/", (req, res, next) => {
  res.send("HOME PAGE");
});

app.listen(PORT, () => {
  console.log("listening to app", PORT);
});
