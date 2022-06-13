const express = require("express");
const fs = require("fs");
const path = require("path");

const getAssets = (fileName) => {
  return path.join(__dirname, "fings", "assetz", fileName);
};

const app = express();
const port = 6969;

const index = path.join(__dirname, "fings", "index.html");
const code = path.join(__dirname, "dist", "main.js");
const pageCode = path.join(__dirname, "fings", "pageCode.js");

const assets = fs.readdirSync("./fings/assetz/");

//Serve the html
app.get("/", (req, res) => res.sendFile(index));

//Serve the code
app.get("/dist/main.js", (req, res) => {
  res.sendFile(code);
});

app.get("/pageCode.js", (req, res) => {
  res.sendFile(pageCode);
});

//Serve the assets
const serveAllAssets = () => {
  assets.forEach((asset) => {
    app.get(`/assetz/${asset}`, (req, res) => {
      res.sendFile(getAssets(asset));
    });
  });
};

serveAllAssets();

//Run the server
app.listen(port, (req, res) => {
  console.log("Welcome to da Goblin pit, ye grotty lout!");
});
