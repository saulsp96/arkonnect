const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

//serves files from our dist directory wich now contains our index.html file
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use("/dashboard01", serveStatic(path.join(__dirname, "/dist")));
app.use("/dashboard02", serveStatic(path.join(__dirname, "/dist")));
app.use("/dashboard03", serveStatic(path.join(__dirname, "/dist")));
app.use("/dashboard04", serveStatic(path.join(__dirname, "/dist")));
const port = process.env.PORT || 8080;
app.listen(port);

console.log("Arkonnect running on: " + port);
