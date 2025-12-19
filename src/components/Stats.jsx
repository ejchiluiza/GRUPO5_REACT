import React, { useState, useEffect } from 'react';

function Stats() {
  // Inicialización desde localStorage (Memoria del navegador)
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('app_likes');
    return savedLikes ? parseInt(savedLikes, 10) : 0;
  });

  // Guardar cada cambio
  useEffect(() => {
    localStorage.setItem('app_likes', likes);
  }, [likes]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 className="column-title">Métricas</h3>
      
      {/* Botón en Español */}
      <button 
        onClick={() => setLikes(likes + 1)} 
        style={{ width: '100%', marginBottom: '1.5rem' }}
      >
        <span>ME GUSTA</span>
        <span style={{ fontSize: '1.2rem' }}>+</span>
      </button>

      {/* Tarjeta de Vidrio */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        background: 'rgba(0,0,0,0.05)', 
        borderRadius: '0', 
        padding: '1rem',
        border: '1px solid var(--glass-border)'
      }}>
        {/* Etiqueta en Español */}
        <p style={{ fontSize: '0.8rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Total Interacciones
        </p>
        <div style={{ 
          fontSize: '4rem', 
          fontWeight: '400', 
          color: 'var(--color-vermillion)',
          lineHeight: 1,
          textShadow: '0 2px 10px rgba(252, 74, 26, 0.2)'
        }}>
          {likes}
        </div>
      </div>
    </div>
  );
}

export default Stats;