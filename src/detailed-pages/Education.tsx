import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap, Star } from 'lucide-react';

const eduData = [
  {
    degree: "M.S. Computer Science",
    school: "Northeastern University",
    location: "Boston, MA",
    date: "Sept 2024 – Expected May 2026",
    gpa: "3.91/4.0",
    coursework: "Information Retrieval, Foundations of AI, Web Development"
  },
  {
    degree: "B.Tech. Computer Science Engineering (AI & ML)",
    school: "Galgotias University",
    location: "Noida, India",
    date: "Aug 2018 – May 2022",
    gpa: "3.65/4.0",
    coursework: "Data Structures, Algorithms, Machine Learning"
  }
];

const Education: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Education</h1>
      <VerticalTimeline>
        {eduData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#1f1f1f', color: '#fff', border: '1px solid #333' }}
            contentArrowStyle={{ borderRight: '7px solid  #1f1f1f' }}
            date={item.date}
            iconStyle={{ background: '#e50914', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{item.school}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#b3b3b3', marginBottom: '15px' }}>{item.degree}</h4>
            <p style={{ fontWeight: 400, fontSize: '1rem', lineHeight: '1.5' }}>
              <strong>GPA:</strong> {item.gpa}<br/><br/>
              <strong>Relevant Coursework:</strong> {item.coursework}
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

export default Education;
