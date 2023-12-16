//import mongoose

const mongoose = require("mongoose");

//create schema

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  language: {
    type: String,
    require: true
  },
  github: {
    type: String,
    require: true
  },
  website: {
    type: String,
    require: true
  },
  overview: {
    type: String,
    require: true
  },
  projectimage: {
    type: String,
    require: true
  },
  userid: {
    type: String,
    require: true
  },
});

const projects = mongoose.model("projects",projectSchema)
module.exports = projects
