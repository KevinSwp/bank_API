import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Connexion from '../pages/connexion';
import Profil from '../pages/profil';
import PrivateRoute from '../hooks/routes/PrivateRoute';
import '../index.scss';
import {ROUTES} from './routes' 

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.login} element={<Connexion />} />
      <Route path={ROUTES.profil} element={<PrivateRoute />}>
        <Route index element={<Profil />} />
      </Route>
    </Routes> 
  ); 
}