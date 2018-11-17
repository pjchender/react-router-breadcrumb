import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from './routes';

/**
 * These are root pages
 */
const Home = () => {
  return <h1 className="py-3">Home</h1>;
};

const Books = () => {
  return <h1 className="py-3">Books</h1>;
};

const Electronics = ({ route, location }) => {
  // Customize breadcrumb through modifying matchRoutes array
  let matchedRoutes = matchRoutes(routes, location.pathname);
  matchedRoutes = [
    {
      route: {
        path: '/',
        breadcrumbName: 'Home'
      }
    },
    ...matchedRoutes
  ];

  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      {/* Breadcrumb */}
      <nav>
        <ol className="breadcrumb">
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;

            // check whether the the path is the Page path user currently at
            const isActive = path === location.pathname;

            // if the Page path is user currently at, then do not show <Link />
            return isActive ? (
              <li key={i} className="breadcrumb-item active">
                {breadcrumbName}
              </li>
            ) : (
              <li key={i} className="breadcrumb-item">
                <Link to={path}>{breadcrumbName} </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      {renderRoutes(route.routes)}
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
