import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormLogin from './auth/FormLogin';
import Dashboard from './dashboard/dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FormLogin />} />  {/* Página de login */}
      <Route path="/dashboard" element={<Dashboard />} />  {/* Página del dashboard */}
    </Routes>
  );
};

export default AppRoutes;
