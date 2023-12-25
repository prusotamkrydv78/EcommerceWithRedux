const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const connectDb = require("./config/config");
// handling cores problem
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST",
  credentials: true,
};
app.use(cors(corsOptions));

// data base connection here
connectDb();

// dotenv dotenv.config

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/products", (req, res) => {
  //   res.send();
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});
app.listen(process.env.PORT || 5000, () => {
  console.log(`your sever is running on ${PORT}`);
});

 
