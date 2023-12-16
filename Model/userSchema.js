//import mongoose

const mongoose = require("mongoose");

//create schema

//schema is created

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: [5, "Must be atleast 5 characters but got {VALUE}"],
  },
  email: {
    type: String,
    require: true,
    unique: true,
    //if the input value is not proper email id the  it throw the error and returs invalid email
    //is email is a method in valdator which check whether the input is a proper email id or not
    validator(value) {
      if (!validator.isEmail(value)) {
      }
      throw new Error("invalid Email");
    },
  },
  password: {
    type: String,
    require: true,
  },
  gitHub: {
    type: String,
  },
  LinkedIn: {
    type: String,
  },
  profile: {
    type: String,
  },
});

//create model

const users = mongoose.model("users", userSchema);

//export

module.exports = users;
