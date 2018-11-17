import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar } from './components';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
