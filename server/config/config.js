const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://localhost:27017/EcommerceWithRedux`
    );
    console.log(`Connection successfuly ${conn.connection.host}`);
  } catch (error) {
    console.log("error at connection", error.message);
    process.exit(1);
  }
};
module.exports =  connectDb;
