const express = require("express");
const path = require("path");

// app declaration
const app = express();

//ports
const PORT = process.env.PORT || 3003;

// 
const route = require("./routes/index.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", route);

// index route
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//notes page api
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// wildcard error
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

// Listening on Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT} 🚀`));