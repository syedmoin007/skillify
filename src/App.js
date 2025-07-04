import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './firebase/auth';

import Home from './pages/home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import FindSkills from './pages/FindSkills';
import OfferSkills from './pages/OfferSkills';

function App() {
  const currentUser = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/auth" element={!currentUser ? <Auth /> : <Navigate to="/dashboard" />} />

        {/* Protected Routes */}
        <Route path="/" element={currentUser ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/auth" />} />
        <Route path="/profile" element={currentUser ? <Profile /> : <Navigate to="/auth" />} />
        <Route path="/find-skills" element={currentUser ? <FindSkills /> : <Navigate to="/auth" />} />
        <Route path="/offer-skills" element={currentUser ? <OfferSkills /> : <Navigate to="/auth" />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to={currentUser ? "/" : "/auth"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
