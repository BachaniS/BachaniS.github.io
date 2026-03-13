import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Item {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  image?: string;
}

interface RowProps {
  title: string;
  items: Item[];
  isLargeRow?: boolean;
}

const Row: React.FC<RowProps> = ({ title, items, isLargeRow }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            onClick={() => item.url && window.open(item.url, '_blank')}
          >
            {item.url && <ExternalLink size={20} className="poster__linkIcon" />}
            <div className="poster__info">
              <h3 className="poster__title">{item.title}</h3>
              <p className="poster__desc">{item.description}</p>
              <div className="poster__tech">
                {item.tech.map(t => (
                  <span key={t} className="tech__badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
