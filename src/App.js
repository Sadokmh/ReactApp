import React from 'react';
import logo from './logo.svg';
import PageWrapper from './components/PageWrapper';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper >

          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            path="/about"
            component={About}
          />

        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
