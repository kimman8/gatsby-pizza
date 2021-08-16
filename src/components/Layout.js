import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';
// import 'normalize.css';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
