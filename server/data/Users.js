const bcrypt = require("bcryptjs");
const Users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "user1",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("user1", 10),
    isAdmin: false,
  },
  {
    name: "user2",
    email: "user2@gmail.com",
    password: bcrypt.hashSync("user1", 10),
    isAdmin: false,
  },
];
module.exports = Users
