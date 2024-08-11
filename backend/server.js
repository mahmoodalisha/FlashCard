const express = require('express');
const sequelize = require('./config/database'); // Import database configuration
const flashcardsRouter = require('./routes/flashcards');

const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());


// Middleware to parse JSON bodies
app.use(express.json()); // Built-in middleware for JSON parsing

// Route handlers
app.use('/api/flashcards', flashcardsRouter); // Mount the flashcards routes

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
