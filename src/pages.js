import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * These are root pages
 */
const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = ({ routes }) => {
  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      <Switch>
        {/* Refactor for using routes config */}
        {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <route.component routes={routes} {...routeProps} />
              )}
            />
          );
        })}
      </Switch>
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };
