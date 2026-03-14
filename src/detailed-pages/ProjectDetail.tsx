import React, { useEffect } from 'react';
import { Github, X, ExternalLink, ChevronRight } from 'lucide-react';
import type { ProjectItem } from '../data';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="project-modal-header">
          <h1 className="project-modal-title">{project.title}</h1>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="project-modal-github">
              <Github size={20} />
              <span>View on GitHub</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p className="project-modal-description">
          {project.detailedDescription || project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="project-modal-section">
            <h2 className="project-modal-section-title">Key Features</h2>
            <ul className="project-modal-features">
              {project.features.map((feature, i) => (
                <li key={i}>
                  <ChevronRight size={16} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="project-modal-section">
            <h2 className="project-modal-section-title">Tech Stack</h2>
            <div className="project-modal-tech-stack">
              {project.techStack.map((t, i) => (
                <span key={i} className="tech-stack-badge">{t}</span>
              ))}
            </div>
          </div>
        )}

        <div className="project-modal-section">
          <h2 className="project-modal-section-title">Technologies</h2>
          <div className="project-modal-tech-tags">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
