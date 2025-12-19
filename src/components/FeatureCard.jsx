import React, { useState } from 'react';

function FeatureCard({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="feature-accordion">
      <button 
        className={`accordion-btn ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icono geométrico a la izquierda */}
        <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>
          {isOpen ? '−' : '+'}
        </span>
        
        {title}
      </button>
      
      {isOpen && (
        <div className="accordion-content">
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      )}
    </div>
  );
}

export default FeatureCard;