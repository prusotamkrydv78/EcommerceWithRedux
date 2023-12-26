const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Users = require("./data/Users");
const products = require("./data/products");

const productModel = require("./models/productModel");
const orderModel = require("./models/orderModel");
const userModel = require("./models/userModel");
const connectDb = require("./config/config");
dotenv.config();
connectDb();

const importData = async () => {
  try {
    await userModel.deleteMany();

    await productModel.deleteMany();
    await orderModel.deleteMany();
    const createUser = await userModel.insertMany(Users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await productModel.insertMany(sampleData);
    console.log("Sample data saved successfully");
    process.exit();
  } catch (error) {
    console.log("error while saving sample data to the data base", error);
    process.exit(1);
  }
};
const dataDestory = async () => {
  try {
    
    await userModel.deleteMany();
    await productModel.deleteMany();
    await orderModel.deleteMany();
    console.log(`error at datadestory ${error}`);
    process.exit();
  } catch (error) {
    
  }
};

if (process.argv[2] === "-d") {
  dataDestory();
} else {
  importData();
}
