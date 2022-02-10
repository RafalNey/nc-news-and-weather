import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="Nav">
        <Link className="Nav__Link" to="/">
              Weather
        </Link>
        <Link className="Nav__Link" to="/articles">
            Articles
        </Link>
      </nav>
  )
};

export default Nav;