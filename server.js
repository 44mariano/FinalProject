const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accounts');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/Films', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

app.use('/api/accounts', accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
