const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const port = 4000;
const sendgrid = require("@sendgrid/mail");

var tools = require("./tools");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Enable CORS for all routes
app.use(cors());

// Parse JSON in request body
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/api/email", (req, res) => {
  const postData = req.body;

  const emailHtml = tools.createEmailTemplate(postData);

  const options = {
    from: "klymovy4roman@gmail.com",
    to: postData.email,
    subject: "Studiopresto order template",
    html: emailHtml,
  };

  sendgrid.send(options);
  console.log("Received POST data:", postData);
  res.json({ message: "Data received on the server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
