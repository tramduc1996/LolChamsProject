const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./server/routes");
const dotenv = require("dotenv");
const mssql = require("./mssql");
const path = require("path");

dotenv.config();
const port = process.env.PORT || 5050;

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send(`PORT: ${port}`);
});

// Serve static files from the React frontend app
app.use(express.static(__dirname + "/public"));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
