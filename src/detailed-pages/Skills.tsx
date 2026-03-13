import React from 'react';
import { userData } from '../data';

const Skills: React.FC = () => {
  const skillsData = userData.categories.find(c => c.title === "Core Skills")?.items || [];

  return (
    <div style={{ padding: '100px 5% 40px', maxWidth: '1000px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Technical Architecture Context</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {skillsData.map((category) => (
          <div key={category.id} style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            padding: '30px', 
            borderRadius: '8px',
            borderLeft: '4px solid #e50914'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{category.title}</h2>
            <p style={{ color: '#b3b3b3', fontSize: '1.2rem', marginBottom: '20px' }}>{category.description}</p>
            
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {category.tech.map((t, i) => (
                <span key={i} style={{ 
                  backgroundColor: '#333', 
                  padding: '8px 16px', 
                  borderRadius: '20px',
                  fontSize: '1rem'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
