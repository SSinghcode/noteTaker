// requirements
const express = require("express");
const notesroute = require("./notes");
const app= require("express").Router();
//app declaration


// Middleware
app.use("/notes", notesroute);

// Exporting app
module.exports = app;