// src/components/ModuleSelection.js
import React from 'react';
import './ModuleSelection.css';

const ModuleSelection = ({ name }) => {
  return (
    <div
      className="module-selection"
      style={{
        backgroundImage: `url('/modules.jpg')`, // Inline style to load image from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1>Hi, {name}!</h1>
      <p>Choose your desired module and mode of difficulty.</p>
      <div className="modules">
        <div className="module">
          <h2>A</h2>
          <p>CVC Words<br />Sight Words<br />Color Words<br />Shape Words<br />Animal Names</p>
          <span>PRE-K - Kinder</span>
        </div>
        <div className="module">
          <h2>B</h2>
          <p>High-Frequency Words<br />Simple Nouns<br />Action Words<br />Family Vocabulary<br />Basic Adjectives</p>
          <span>Grade 1</span>
        </div>
        <div className="module">
          <h2>C</h2>
          <p>Synonyms and Antonyms<br />Expanded Vocabulary<br />Words Related to Seasons<br />Descriptive Adjectives<br />Word Families</p>
          <span>Grade 2</span>
        </div>
        <div className="module">
          <h2>D</h2>
          <p>Academic Vocabulary<br />Context Clues Vocabulary<br />Homophones<br />Multi-Syllable Words<br />Topic-Specific Vocabulary</p>
          <span>Grade 3</span>
        </div>
      </div>
    </div>
  );
};

export default ModuleSelection;
