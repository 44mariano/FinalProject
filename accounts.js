// accounts.js

const express = require('express');
const router = express.Router();
const Account = require('../models/account');

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if username or email already exists
    const existingUser = await Account.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    const newAccount = new Account({ username, email, password });
    await newAccount.save();
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if user exists
    const user = await Account.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Validate password
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // Generate JWT token
    const token = user.generateAuthToken();
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
