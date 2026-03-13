import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { userData } from '../data';

const ContactMe: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get In Touch</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#b3b3b3', marginBottom: '50px', maxWidth: '600px', lineHeight: '1.6' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a question or just want to say hi, my inbox is open!
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '400px' }}>
        <a href={`mailto:${userData.contact.email}`} style={contactBtnStyle}>
          <Mail size={24} /> Email Me
        </a>
        <a href={userData.contact.github} target="_blank" rel="noreferrer" style={contactBtnStyle}>
          <Github size={24} /> GitHub Profile
        </a>
        <a href={userData.contact.linkedin} target="_blank" rel="noreferrer" style={{...contactBtnStyle, backgroundColor: '#0077b5', color: 'white'}}>
          <Linkedin size={24} /> LinkedIn Network
        </a>
        <a href={userData.contact.portfolio} target="_blank" rel="noreferrer" style={contactBtnStyle}>
          <ExternalLink size={24} /> Legacy Portfolio
        </a>
      </div>
    </div>
  );
};

const contactBtnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  padding: '15px 20px',
  backgroundColor: '#fff',
  color: '#141414',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '4px',
  transition: 'transform 0.2s',
  cursor: 'pointer'
};

export default ContactMe;
