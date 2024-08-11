const sequelize = require('./config/database');
const Flashcard = require('./models/Flashcard');

// Function to insert data
const insertData = async () => {
  try {
    await sequelize.sync(); // Ensure the table exists

    // Add new flashcards
    await Flashcard.create({
      question: 'What is the capital of France?',
      answer: 'Paris'
    });

    await Flashcard.create({
      question: 'What is the largest planet in our solar system?',
      answer: 'Jupiter'
    });

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    sequelize.close(); // Close the connection
  }
};

insertData();
