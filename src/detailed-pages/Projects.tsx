import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import { userData } from '../data';
import type { ProjectItem } from '../data';
import ProjectDetail from './ProjectDetail';

const Projects: React.FC = () => {
  const [allowedCategories, setAllowedCategories] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const profile = localStorage.getItem('activeProfile') || 'general';
    switch (profile) {
      case 'swe':
        setAllowedCategories(["Featured Projects", "Full-Stack Applications"]);
        break;
      case 'ai':
        setAllowedCategories(["Featured Projects", "AI & Machine Learning"]);
        break;
      case 'de':
        setAllowedCategories(["Featured Projects", "Data Engineering & ETL"]);
        break;
      case 'general':
      default:
        setAllowedCategories(["Featured Projects", "AI & Machine Learning", "Full-Stack Applications", "Data Engineering & ETL"]);
        break;
    }
  }, []);

  const projectCategories = userData.categories.filter(c =>
    allowedCategories.includes(c.title)
  );

  return (
    <div style={{ padding: '100px 5% 40px', maxWidth: '1200px', margin: '0 auto' }}>
      {projectCategories.map((category) => (
        <div key={category.title} style={{ marginBottom: '60px' }}>
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>{category.title}</h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
            gap: '20px'
          }}>
            {category.items.map((project) => (
              <div key={project.id} style={{
                backgroundColor: '#1f1f1f',
                borderRadius: '8px',
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
                border: '1px solid #333',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#e50914';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#333';
              }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <FolderIcon />
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <a
                        href={project.url || "https://github.com/BachaniS"}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#e5e5e5' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <h2 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '15px' }}>{project.title}</h2>
                  <p style={{ color: '#b3b3b3', fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px' }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ color: '#e50914', fontSize: '0.9rem', fontFamily: 'monospace' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default Projects;
