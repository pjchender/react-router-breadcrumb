import React from 'react';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes, { rootPath } from './routes';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`${rootPath}/`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${rootPath}/books`}>
              Books
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to={`${rootPath}/electronics`}
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Electronics
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link
                className="dropdown-item"
                to={`${rootPath}/electronics/mobile`}
              >
                Mobile Phone
              </Link>
              <Link
                className="dropdown-item"
                to={`${rootPath}/electronics/desktop`}
              >
                Desktop PC
              </Link>
              <Link
                className="dropdown-item"
                to={`${rootPath}/electronics/laptop`}
              >
                Laptop
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(routes, locationPath);

  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav>
      <ol className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route;
          const isActive = path === locationPath;

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
  );
};

export { Navbar, Breadcrumb };
