import React from 'react';
import { Play, Info } from 'lucide-react';
import { userData } from '../data';
import './ProfileBanner.css';
import { useNavigate } from 'react-router-dom';

interface ProfileBannerProps {
  profileName: string;
}

const titles: Record<string, string> = {
  swe: "Software Engineering Spotlight",
  ai: "AI & ML Innovations",
  de: "Data Engineering Architecture",
  general: "Full Stack Engineer & Data Specialist"
};

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profileName }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-banner-contents">
      <h1 className="profile-banner-title">{titles[profileName]}</h1>
      <p className="profile-banner-description">
        {userData.description}
      </p>
      <div className="profile-banner-buttons">
        <button className="banner-btn play" onClick={() => navigate('/work-experience')}>
          <Play size={20} fill="black" /> <span>View Experience</span>
        </button>
        <button className="banner-btn more-info" onClick={() => navigate('/projects')}>
          <Info size={20} /> <span>Projects</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileBanner;
