import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netflixSound from '../assets/netflix-sound.mp3';
import { userData } from '../data';
import './NetflixTitle.css';

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    if (isClicked) return;
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); 
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <h1 className={`netflix-logo-text ${isClicked ? 'animate' : ''}`}>
        {userData.name.split(' ')[0]}
      </h1>
      {!isClicked && <p className="click-instruction">Click anywhere to enter</p>}
    </div>
  );
};

export default NetflixTitle;
