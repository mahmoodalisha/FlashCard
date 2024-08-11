// frontend/src/components/AddFlashcard.js
import React, { useState } from 'react';
import axios from 'axios';

const AddFlashcard = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/flashcards', { question, answer });
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        required
      />
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcard;
