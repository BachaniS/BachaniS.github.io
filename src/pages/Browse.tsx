import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Brain, Database, Compass } from 'lucide-react';
import './Browse.css';

const profiles = [
  {
    name: "Software Engineer",
    id: "swe",
    color: "#e50914",
    icon: <Code2 size={48} />,
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif"
  },
  {
    name: "AI Engineer",
    id: "ai",
    color: "#3498db",
    icon: <Brain size={48} />,
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
  },
  {
    name: "Data Engineer",
    id: "de",
    color: "#2ecc71",
    icon: <Database size={48} />,
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif"
  },
  {
    name: "Explorer",
    id: "general",
    color: "#f39c12",
    icon: <Compass size={48} />,
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif"
  }
];

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: any) => {
    navigate(`/profile/${profile.id}`, { state: { backgroundGif: profile.gif, name: profile.name, color: profile.color } });
  };

  return (
    <div className="browse-container">
      <h1 className="who-is-watching">Who's Watching?</h1>
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card" onClick={() => handleProfileClick(profile)}>
            <div className="profile-avatar" style={{ '--accent': profile.color } as React.CSSProperties}>
              <div className="profile-icon-wrapper">
                {profile.icon}
              </div>
              <div className="profile-glow" style={{ backgroundColor: profile.color }}></div>
            </div>
            <p className="profile-name">{profile.name}</p>
          </div>
        ))}
      </div>
      <p className="browse-hint">Select a profile to explore</p>
    </div>
  );
};

export default Browse;
