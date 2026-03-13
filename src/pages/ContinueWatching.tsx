import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, GraduationCap, Mail } from 'lucide-react';
import './TopPicksRow.css';

interface ContinueWatchingProps {
  profile: string;
}

const config: Record<string, any[]> = {
  swe: [
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  ai: [
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  de: [
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  general: [
    { title: "Skills", route: "/skills", icon: <Code2 size={28} />, img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ]
};

const profileLabels: Record<string, string> = {
  swe: "Software Engineer",
  ai: "AI Engineer",
  de: "Data Engineer",
  general: "Explorer"
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const navigate = useNavigate();
  const picks = config[profile] || config.general;

  return (
    <div className="netflix-row">
      <h2 className="netflix-row-title">
        <span className="row-title-icon">▶</span> Continue Watching for {profileLabels[profile] || profile}
      </h2>
      <div className="netflix-card-row">
        {picks.map((pick: any, i: number) => (
          <div key={i} className="netflix-card" onClick={() => navigate(pick.route)} style={{ animationDelay: `${i * 0.1}s` }}>
            <img src={pick.img} alt={pick.title} className="netflix-card-img" loading="lazy" />
            <div className="netflix-card-gradient" />
            <div className="netflix-card-content">
              <div className="netflix-card-icon">{pick.icon}</div>
              <h3 className="netflix-card-label">{pick.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
