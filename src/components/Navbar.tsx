import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { userData } from '../data';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__left">
        <div className="nav__logo" onClick={() => navigate('/browse')}>
          {userData.name.split(' ')[0]}
        </div>
        <div className="nav__links_text">
           <span onClick={() => navigate('/browse')}>Home</span>
           <span onClick={() => navigate('/projects')}>Projects</span>
           <span onClick={() => navigate('/work-experience')}>Experience</span>
        </div>
      </div>
      <div className="nav__right" onClick={() => navigate('/browse')}>
        <div className="nav__avatar"><User color="white" /></div>
      </div>
    </div>
  );
};

export default Navbar;
