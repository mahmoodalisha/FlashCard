import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  if (!flashcard) {
    return <div>Loading...</div>;
  }

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          {flashcard.question}
        </div>
        <div className="back">
          {flashcard.answer}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
