const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

/* Test Route */
app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* Contact Route */
app.post("/contact", async (req, res) => {

  try {

    console.log(req.body);

    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message Sent Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

/* Start Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});