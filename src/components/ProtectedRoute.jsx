import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../firebase/auth';

export default function ProtectedRoute({ children }) {
  const currentUser = useAuth();

  if (currentUser === null) {
    // not logged in
    return <Navigate to="/auth" replace />;
  }

  return children;
}
