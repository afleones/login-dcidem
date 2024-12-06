import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';  // Importamos las rutas

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes /> {/* Aquí estamos usando el componente que contiene nuestras rutas */}
      </div>
    </Router>
  );
};

export default App;
