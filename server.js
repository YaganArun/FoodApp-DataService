const express = require("express");
const data = require("./data");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

let corsOptions = {
  origin: "food-ordering-app-clone.vercel.app",
  optionsSuccessStatus: 200,
};

app.get("/", cors(corsOptions), (req, res) => {
  res.json(data.jsonResData());
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
