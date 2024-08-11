import React, { useState, useEffect } from 'react';

function Dashboard({ setFlashcards }) {
    const [flashcards, setLocalFlashcards] = useState([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        // Fetch flashcards from the backend
        fetch('/api/flashcards')
            .then((response) => response.json())
            .then((data) => setLocalFlashcards(data));
    }, []);

    const addFlashcard = () => {
        fetch('/api/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, answer }),
        })
            .then((response) => response.json())
            .then((newFlashcard) => {
                setLocalFlashcards([...flashcards, newFlashcard]);
                setFlashcards([...flashcards, newFlashcard]);
                setQuestion('');
                setAnswer('');
            });
    };

    const updateFlashcard = () => {
        fetch(`/api/flashcards/${editId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question, answer }),
        })
            .then(() => {
                const updatedFlashcards = flashcards.map((card) =>
                    card.id === editId ? { ...card, question, answer } : card
                );
                setLocalFlashcards(updatedFlashcards);
                setFlashcards(updatedFlashcards);
                setQuestion('');
                setAnswer('');
                setEditMode(false);
                setEditId(null);
            });
    };

    const deleteFlashcard = (id) => {
        fetch(`/api/flashcards/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const remainingFlashcards = flashcards.filter((card) => card.id !== id);
            setLocalFlashcards(remainingFlashcards);
            setFlashcards(remainingFlashcards);
        });
    };

    const startEditing = (card) => {
        setEditMode(true);
        setQuestion(card.question);
        setAnswer(card.answer);
        setEditId(card.id);
    };

    return (
        <div className="dashboard">
            <h2>{editMode ? 'Edit Flashcard' : 'Add a New Flashcard'}</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={editMode ? updateFlashcard : addFlashcard}>
                {editMode ? 'Update Flashcard' : 'Add Flashcard'}
            </button>

            <h3>Manage Flashcards</h3>
            <ul>
                {flashcards.map((card) => (
                    <li key={card.id}>
                        <p><strong>Q:</strong> {card.question}</p>
                        <p><strong>A:</strong> {card.answer}</p>
                        <button onClick={() => startEditing(card)}>Edit</button>
                        <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
