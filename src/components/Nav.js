import React from 'react';
import { Link } from 'gatsby';

const clickHandler = () => {
  console.log('go to slicers ');
};
const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <button type="button" onClick={clickHandler}>
          Click me to see slice masters after 2 seconds
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
