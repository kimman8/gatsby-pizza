import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';

const Instagram = styled(FaInstagram)`
  font-size: 2.5rem;
  /* padding: 0.5rem; */
  color: var(--black);
  /* background: var(--black); */
  /* border-radius: 2.5rem; */
  /* margin: 1.25rem; */
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: -0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--red);
  }
`;
const Facebook = styled(GrFacebookOption)`
  font-size: 2.5rem;
  /* padding: 0.5rem; */
  color: var(--black);
  /* background: var(--black); */
  /* border-radius: 2.5rem; */
  margin-bottom: -0.5rem;
  /* margin: 1.25rem; */
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--red);
  }
`;
const Footer = () => (
  <footer>
    <p className="center">
      &copy;Lucky Start {new Date().getFullYear()}{' '}
      <span>
        <a target="_blank" href="https://www.instagram.com/luckystartchinese/">
          <Instagram />
        </a>
      </span>
      <span>
        <a target="_blank" href="https://www.facebook.com/LuckyStartChinese">
          <Facebook />
        </a>
      </span>
    </p>
  </footer>
);

export default Footer;
