import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    margin-top: -6rem;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    text-align: center;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    transition: 0.2s ease-in-out;
    margin-bottom: 2rem;

    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    // &[aria-current'page'] {
    //   color: var(--red);
    // }
  }
  @media (max-width: 700px) {
    --columns: 4;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      background: tomato;
      order: 0;
      grid-column: 1/-1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 600px) {
    --columns: 2;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li className="logo-item">
        <Link to="/menu">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/lunch">Lunch Special</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
