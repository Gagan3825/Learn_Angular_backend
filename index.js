const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend services");
});

app.post("/form-data", (req, res) => {
  const data = req.body;
  
  fs.appendFile("formdata.txt", JSON.stringify(data)+'\n', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving data' });
    }
    res.status(200).json({ message: 'Form data saved successfully' });
  });
});

app.listen(port, () =>
  console.log("Server is listening on the port no.", port)
);
