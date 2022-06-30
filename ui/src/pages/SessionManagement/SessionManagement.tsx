import { Navigate, Route, Routes } from 'react-router-dom';
import { SessionData } from './SessionData';

export const SessionManagement = () => {
  return (
    <Routes>
      <Route path="data" element={<SessionData />} />
      <Route path="*" element={<Navigate to="data" />} />
    </Routes>
  );
};

