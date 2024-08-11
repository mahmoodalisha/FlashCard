const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard'); // Correct path to the Flashcard model

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flashcards' });
  }
});

// Add a new flashcard
router.post('/', async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' });
    }
    const newFlashcard = await Flashcard.create({ question, answer });
    res.status(201).json(newFlashcard);
  } catch (error) {
    console.error('Error adding flashcard:', error); // Log the error
    res.status(500).json({ error: 'Failed to add flashcard' });
  }
});


// Update a flashcard
router.put('/:id', async (req, res) => {
  try {
    const { question, answer } = req.body;
    const flashcard = await Flashcard.findByPk(req.params.id);
    if (flashcard) {
      flashcard.question = question;
      flashcard.answer = answer;
      await flashcard.save();
      res.json(flashcard);
    } else {
      res.status(404).json({ error: 'Flashcard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update flashcard' });
  }
});

// Delete a flashcard
router.delete('/:id', async (req, res) => {
  try {
    const flashcard = await Flashcard.findByPk(req.params.id);
    if (flashcard) {
      await flashcard.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Flashcard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete flashcard' });
  }
});

module.exports = router;

