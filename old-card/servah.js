const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 6969;

const assetRoot = path.join(__dirname, "fings", "assetz");
const assetArray = fs.readdirSync(assetRoot);
const assetRel = "assetz";

const index = path.join(__dirname, "fings", "index.html");
const code = path.join(__dirname, "dist", "main.js");
const pageCode = path.join(__dirname, "fings", "pageCode.js");
const testMap = path.join(__dirname, "maps", "testMap.json");
const css = path.join(__dirname, "fings", "css", "output.css");
//Serve the html
app.get("/", (req, res) => res.sendFile(index));

app.get("/maps/testMap.json", (req, res) => {
  res.sendFile(testMap);
});

app.get("/css/output.css", (req, res) => {
  res.sendFile(css);
});

//Serve the code
app.get("/dist/main.js", (req, res) => {
  res.sendFile(code);
});

app.get("/pageCode.js", (req, res) => {
  res.sendFile(pageCode);
});

app.get("/maps/testMap.json", (req, res) => {
  res.sendFile;
});

//Loop through folders
const folderLoop = (fArray, fRoot, fRel) => {
  fArray.forEach((folder) => {
    const folderPath = path.join(fRoot, folder);
    const relPath = `${fRel}/${folder}`;
    serveAllAssets(folderPath, relPath);
  });
};

// Serve the assets in each folder or loop through child folders
const serveAllAssets = (folderPath, relPath) => {
  const folderContents = fs.readdirSync(folderPath);
  const folderArray = [];
  folderContents.forEach((asset) => {
    if (fs.lstatSync(path.join(folderPath, asset)).isDirectory()) {
      folderArray.push(asset);
    } else {
      const filePath = path.join(folderPath, asset);
      app.get(`/${relPath}/${asset}`, (req, res) => {
        console.log(`Issa '${asset}', innit`);
        res.sendFile(filePath);
      });
    }
  });
  if (folderArray.length > 0) {
    folderLoop(folderArray, folderPath, relPath);
  }
};

folderLoop(assetArray, assetRoot, assetRel);

//Run the server
app.listen(port, (req, res) => {
  console.log("Welcome to da Goblin pit, ye grotty lout!");
});
