import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FolderOpen, GraduationCap, Code2, Mail } from 'lucide-react';
import './TopPicksRow.css';

interface TopPicksRowProps {
  profile: string;
}

const config: Record<string, any[]> = {
  swe: [
    { title: "Projects", route: "/projects", icon: <FolderOpen size={28} />, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" },
    { title: "Experience", route: "/work-experience", icon: <Briefcase size={28} />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
    { title: "Skills", route: "/skills", icon: <Code2 size={28} />, img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=500&q=80" },
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  ai: [
    { title: "Projects", route: "/projects", icon: <FolderOpen size={28} />, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80" },
    { title: "Skills", route: "/skills", icon: <Code2 size={28} />, img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=500&q=80" },
    { title: "Experience", route: "/work-experience", icon: <Briefcase size={28} />, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" },
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  de: [
    { title: "Experience", route: "/work-experience", icon: <Briefcase size={28} />, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80" },
    { title: "Projects", route: "/projects", icon: <FolderOpen size={28} />, img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=80" },
    { title: "Skills", route: "/skills", icon: <Code2 size={28} />, img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=80" },
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
    { title: "Contact", route: "/contact-me", icon: <Mail size={28} />, img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
  ],
  general: [
    { title: "Experience", route: "/work-experience", icon: <Briefcase size={28} />, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
    { title: "Projects", route: "/projects", icon: <FolderOpen size={28} />, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" },
    { title: "Education", route: "/education", icon: <GraduationCap size={28} />, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80" },
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

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const picks = config[profile] || config.general;

  return (
    <div className="netflix-row">
      <h2 className="netflix-row-title">
        <span className="row-title-icon">▶</span> Top Picks for {profileLabels[profile] || profile}
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
            <div className="netflix-card-number">{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
