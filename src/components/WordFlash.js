// src/components/WordFlash.js
import React, { useEffect, useState } from 'react';
import './WordFlash.css';

const WordFlash = ({ module, onBackToHome }) => {
  const [mediaList, setMediaList] = useState([]);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch words from backend API
    const fetchWords = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/words/${module}`);
        const data = await response.json();
        setMediaList(data);
      } catch (error) {
        console.error('Failed to fetch words', error);
      }
    };

    fetchWords();
  }, [module]);

  useEffect(() => {
    if (mediaList.length > 0 && mediaIndex < mediaList.length) {
      const currentMedia = mediaList[mediaIndex];
      const audio = new Audio(currentMedia.audioPath);
      audio.play();

      const interval = setInterval(() => {
        setMediaIndex((prevIndex) => prevIndex + 1);
        setProgress(((mediaIndex + 1) / mediaList.length) * 100);
      }, 5000); // Change media every 5 seconds

      return () => {
        clearInterval(interval);
        audio.pause();
      };
    }
  }, [mediaIndex, mediaList]);

  return (
    <div className="word-flash">
      {mediaList.length > 0 && mediaIndex < mediaList.length ? (
        <>
          <img
            src={mediaList[mediaIndex].imagePath}
            alt={mediaList[mediaIndex].word}
            className="flash-image"
          />
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </>
      ) : (
        <h2>End of Words</h2>
      )}
      <button onClick={onBackToHome}>Back to Home</button>
    </div>
  );
};

export default WordFlash;
