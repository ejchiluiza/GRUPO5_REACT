import React, { useState } from 'react'; 

function Hero() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 className="column-title">Ficha Técnica</h3>
      
      <button 
        onClick={() => setShowInfo(!showInfo)} 
        style={{ width: '100%', marginBottom: '1rem' }}
      >
        <span>{showInfo ? 'OCULTAR' : 'VER DETALLES'}</span>
        {/* Símbolo minimalista para el botón */}
        <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{showInfo ? '−' : '+'}</span>
      </button>

      {showInfo && (
        <div style={{ 
          textAlign: 'left',
          fontSize: '0.9rem',
          background: 'rgba(0,0,0,0.05)',
          padding: '1rem',
          border: '1px solid var(--glass-border)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <p style={{ marginTop: 0, marginBottom: '1rem', fontStyle: 'italic', opacity: 0.8 }}>
            Especificaciones del entorno de desarrollo.
          </p>
          <hr style={{ border: '0', borderTop: '1px solid var(--color-vermillion)', margin: '0.5rem 0', opacity: 0.3 }}/>
          
          {/* Lista con iconos geométricos minimalistas */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0' }}>
            <li style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-vermillion)', marginRight: '8px', fontSize: '1.2em' }}>◇</span>
              <span><strong>Materia:</strong> Prog. Integrativa</span>
            </li>
            <li style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-vermillion)', marginRight: '8px', fontSize: '1.2em' }}>◈</span>
              <span><strong>Core:</strong> React 18 + Vite</span>
            </li>
            <li style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-vermillion)', marginRight: '8px', fontSize: '1.2em' }}>⟡</span>
              <span><strong>Estilos:</strong> Aero Glass CSS</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hero;