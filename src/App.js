import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './components';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        {/* Refactor for using routes config */}
        {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => <route.component routes={routes} {...routeProps} />}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
