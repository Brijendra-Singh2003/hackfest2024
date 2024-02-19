const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client")));

app.listen(port, () => {
  console.log(`app running at port:${port}`);
});
