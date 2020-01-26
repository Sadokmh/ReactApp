import React from 'react';
import logo from './logo.svg';
import PageWrapper from './components/PageWrapper';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <PageWrapper >
        <Router>
          <Route
            path="/home"
            component = {Home}
          />
        </Router>
        </PageWrapper>
    </div>
  );
}

export default App;
