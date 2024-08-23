#FlashCard app
This is a simple Flashcard App built using React, where each flashcard displays a question on the front and the corresponding answer on the back. Users can flip the cards to see the answer and click on the "Next" and "Prev" button to move to the next card.




https://github.com/user-attachments/assets/b89dc86e-47ab-41e8-8ea3-568cf36abf55


Features
Interactive Flashcards: Each flashcard contains a question on the front and its answer on the back. Clicking on the card flips it to reveal the answer.
Next Card Navigation: After flipping a card to see the answer, you can click the "Next" button to move to the next flashcard in the sequence.
MySQL Database: All questions and answers are stored in a local MySQL database.
Tech Stack
Frontend: React
Backend: Node.js (optional if you implemented an API for fetching cards)
Database: MySQL (local)
Installation
Prerequisites
Node.js and npm installed on your machine
MySQL installed and running locally
Steps
Clone the repository


git clone https://github.com/mahmoodalisha/Flashcard-app.git
cd flashcard-app
Install dependencies


npm install
Setup MySQL Database

Create a new MySQL database.
Create a table to store questions and answers.
Import your existing data into the table if needed.
Update the database connection settings in your app (e.g., db.js or .env file).
Run the App


npm start
The app should now be running at http://localhost:3000.

Usage
Navigate through the flashcards by clicking the "Next" button.
Flip a card to reveal the answer.
Add or update questions and answers directly in the MySQL database as needed.
Database Schema
Here’s a basic idea of how your table schema might look:


CREATE TABLE flashcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
);
Contributing
Feel free to fork this repository, submit pull requests, or suggest new features. Any contributions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for details.
