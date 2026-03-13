import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Star } from 'lucide-react';
import '../pages/ProfilePage.css'; // Reusing standard bg

const timelineData = [
  {
    title: "Software Engineer (Data Platform)",
    company: "Cognizant",
    location: "Bangalore, India",
    date: "May 2022 - May 2024",
    tech: "Snowflake, Teradata, SQL, Python",
    description: "Owned the Finance domain in Apple GBI Teradata-to-Snowflake migration, moving 70+ TB and completing 650+ Tableau workbooks/data sources 2 months before handover. Converted and rewrote complex Teradata SQL into Snowflake."
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Work Experience</h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1f1f1f', color: '#fff', border: '1px solid #333' }}
            contentArrowStyle={{ borderRight: '7px solid  #1f1f1f' }}
            date={item.date}
            iconStyle={{ background: '#e50914', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#b3b3b3', marginBottom: '15px' }}>{item.company} | {item.location}</h4>
            <div style={{ marginBottom: '15px' }}>
              <span style={{ backgroundColor: '#333', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>{item.tech}</span>
            </div>
            <p style={{ fontWeight: 400, fontSize: '1rem', lineHeight: '1.5' }}>
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'green', color: '#fff' }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
