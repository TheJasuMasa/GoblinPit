const express = require("express");

const getAssets = (fileName) => {
  return path.join(__dirname, "fings", "assetz", fileName);
};

const app = express();
const port = 6969;
const path = require("path");

const index = path.join(__dirname, "fings", "index.html");
const code = path.join(__dirname, "dist", "main.js");

const RNB = getAssets("RNB.mp3")
const skybox = getAssets("skybox800x600.png");
const cloud1 = getAssets("cloud1.png");
const dahpit = getAssets("dahpit.png");
const jHead = getAssets("jHead.png");
const bHead = getAssets("bHead.png");
const onlookingBois = getAssets("onlookingBois.png")

// app.use(express.static("fings", options));

app.get("/", (req, res) => res.sendFile(index));

app.get("/dist/main.js", (req, res) => {
  res.sendFile(code);
});

app.get("/assetz/skybox800x600.png", (req, res) => {
  res.sendFile(skybox);
});

app.get("/assetz/cloud1.png", (req, res) => {
  res.sendFile(cloud1);
});

app.get("/assetz/dahpit.png", (req, res) => {
  res.sendFile(dahpit);
});

app.get("/assetz/jHead.png", (req, res) => {
  res.sendFile(jHead);
});

app.get("/assetz/bHead.png", (req, res) => {
  res.sendFile(bHead);
});

app.get("/assetz/onlookingBois.png", (req, res) => {
  res.sendFile(onlookingBois);
});


app.get("/assetz/RNB.mp3", (req, res) => {
  res.sendFile(RNB);
});


app.listen(port, (req, res) => {
  console.log("Welcome to da Goblin pit, ye grotty lout!");
});
