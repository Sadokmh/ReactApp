import React from 'react';
import PageWrapper from './components/PageWrapper';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/common/Services';
import Contact from './components/pages/Contact';

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

          <Route
            path="/services"
            component={Services}
          />

          <Route
            path="/contact"
            component={Contact}
          />

        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
