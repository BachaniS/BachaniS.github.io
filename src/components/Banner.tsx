import { userData } from '../data';
import { Play, Info } from 'lucide-react';

const Banner = () => {
  return (
    <header 
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{userData.title}</h1>
        <div className="banner__description">
          {userData.description}
        </div>
        <div className="banner__buttons">
          <button className="banner__button" onClick={() => window.open(userData.contact.github, '_blank')}>
            <Play size={20} fill="black" /> View Latest Project
          </button>
          <button className="banner__button banner__button--dark" onClick={() => window.open(userData.contact.linkedin, '_blank')}>
            <Info size={20} /> More Info
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
export default Banner;
