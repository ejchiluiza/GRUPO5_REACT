import { useState, useEffect } from 'react';
import './App.css';
import featuresData from './data/features.json';

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container">
      <Header isDark={theme === 'dark'} onToggle={toggleTheme} />

      <main>
        <div className="three-columns-layout">
          
          {/* COLUMNA 1: Ficha Técnica (Hero) */}
          <div className="column-card">
            <Hero />
          </div>

          {/* COLUMNA 2: Interacciones (Stats) */}
          <div className="column-card">
            <Stats />
          </div>

          {/* COLUMNA 3: Arquitectura (Lista Desplegable) */}
          <div className="column-card">
            <h3 className="column-title">Arquitectura del Sistema</h3>
            <div className="accordion-container">
              {features.map((item) => (
                <FeatureCard 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;