// requirements
const express = require("express");
const notesRouter = require("./notes");

//app declaration
const app = express();

// Middleware
app.use("/notes", notesRouter);

// Exporting app
module.exports = app;