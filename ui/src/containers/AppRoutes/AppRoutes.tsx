import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  SessionManagement,
} from '../../pages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="session-management/*" element={<SessionManagement />} />

      <Route path="*" element={<Navigate to="session-management/" />} />
    </Routes>
  );
};
