import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import lunch from '../assets/images/lunch3.jpg';
import lunchs from '../assets/images/lunch3s.jpeg';
import lunch1 from '../assets/images/lunch4.jpg';
import lunch1s from '../assets/images/lunch4s.jpeg';
import lunch2 from '../assets/images/lunch5.jpg';
import lunch2s from '../assets/images/lunch5s.jpeg';

const LunchH2Styles = styled.h2`
  margin-bottom: 2rem;
`;

const ImageStyles = styled.div`
  display: grid;
  gap: 3rem;
`;

export default function LunchSpecialPage() {
  return (
    <div className="center">
      <SEO title="Lunch Specials" />
      <h1> Lunch Special is from 11am - 3pm daily!</h1>
      <LunchH2Styles>
        Choose up to 3 dishes with half fried rice or noodles
      </LunchH2Styles>
      <ImageStyles>
        {/* <img src={lunch} alt="lunch special" /> */}
        <img src={lunchs} alt="lunch special" />
        {/* <img src={lunch1} alt="lunch special" /> */}
        <img src={lunch1s} alt="lunch special" />
        {/* <img src={lunch2} alt="lunch special" /> */}
        <img src={lunch2s} alt="lunch special" />
      </ImageStyles>
    </div>
  );
}
