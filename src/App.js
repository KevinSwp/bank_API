import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Connexion from './pages/connexion';
import Profil from './pages/profil';
import PrivateRoute from './hooks/routes/PrivateRoute';
import './index.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/profil" element={<PrivateRoute />}>
        <Route index element={<Profil />} />
      </Route>
    </Routes>
  );
}

export default App;
