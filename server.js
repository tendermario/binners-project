const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
app.set("view engine", "ejs");

// Middleware to pull the address out of the form
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", (req, res) => {
  res.render("index");
})

app.post("/submit", (req, res) => {
  let { address } = req.body;


  res.render("map", { address });
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});