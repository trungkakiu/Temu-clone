import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Public Components/pulicHomePage';

const PublicRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

  );
};

export default PublicRoutes;
