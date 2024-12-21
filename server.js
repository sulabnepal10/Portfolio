// server.js
require('dotenv').config(); // Load environment variables from .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Create a Schema for the contact form
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

// Create a model based on the Schema
const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submissions
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save(); // Save the data to MongoDB

    res.status(200).json({ code: 200, status: 'Message sent successfully' });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ code: 500, status: 'Something went wrong, please try again later.' });
  }
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
