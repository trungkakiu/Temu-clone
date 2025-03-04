import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <div className="PublicRoutes">
        <Switch> 
          <PublicRoutes />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
