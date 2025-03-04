import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Public Components/pulicHomePage';

const PublicRoutes = () => {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/register" render={() => <div>Register Page</div>} />
    </>
  );
};

export default PublicRoutes;
