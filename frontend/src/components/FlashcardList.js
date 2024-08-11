import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/flashcards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched flashcards:', data); // Log fetched data
        setFlashcards(data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div>
      {flashcards.length > 0 ? (
        <Flashcard flashcard={flashcards[currentIndex]} />
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={prevCard} disabled={flashcards.length === 0}>Previous</button>
      <button onClick={nextCard} disabled={flashcards.length === 0}>Next</button>
    </div>
  );
};

export default FlashcardList;

