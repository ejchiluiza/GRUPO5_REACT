import React from 'react';

function Header({ isDark, onToggle }) {
  return (
    <header className="header">
      <div>
        <h1 style={{ margin: 0, fontSize: '1.4rem', color: 'white' }}>
          PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB
        </h1>
        <small style={{ opacity: 0.8, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-main)' }}>
          NRC 29334 | GRUPO 5
        </small>
      </div>

      <button onClick={onToggle} style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', minWidth: '100px', justifyContent: 'center' }}>
        {isDark ? '☀ CLARO' : '☾ OSCURO'}
      </button>
    </header>
  );
}

export default Header;