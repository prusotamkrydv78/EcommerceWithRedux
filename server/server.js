const express = require("express");
const { errorHanlder } = require("./middlewares/errorMiddleware");
const products = require("./data/products");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const connectDb = require("./config/config");

const productRoutes = require("./routes/productsRoute");

// handling cores problem
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api", productRoutes);
app.use(errorHanlder)
// data base connection here
connectDb();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("home page");
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`your sever is running on ${PORT}`);
});
