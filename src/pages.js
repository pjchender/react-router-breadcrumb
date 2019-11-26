import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb } from './components';
import { rootPath } from './routes';

/**
 * These are root pages
 */
const Home = ({ location }) => {
  return (
    <div>
      <h1 className="py-3">Home</h1>
      <Breadcrumb locationPath={location.pathname} />
    </div>
  );
};

const Books = ({ location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    const _matchedRoutes = matchedRoutes.map((matchedRoute) => {
      if (matchedRoute.match && matchedRoute.match.path === '/books/:id') {
        const bookId =
          matchedRoute.match.params && matchedRoute.match.params.id;
        // You can find book name by bookId here...
        return {
          match: matchedRoute.match,
          route: {
            ...matchedRoute.route,
            path: matchedRoute.match.url,
            breadcrumbName: bookId,
          },
        };
      } else {
        return matchedRoute;
      }
    });

    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Home',
        },
      },
      ..._matchedRoutes,
    ];
  };

  return (
    <div>
      <h1 className="py-3">Books</h1>
      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />
    </div>
  );
};

const Electronics = ({ route, location }) => {
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: `${rootPath}/`,
          breadcrumbName: 'Home',
        },
      },
      ...matchedRoutes,
    ];
  };

  return (
    <div>
      <h1 className="py-3">Electronics</h1>

      <Breadcrumb
        locationPath={location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      />

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
