import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Connexion from './pages/connexion';
import About from './pages/about';
import PrivateRoute from './hooks/routes/PrivateRoute';
import './index.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/about" element={<PrivateRoute />}>
        <Route index element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
