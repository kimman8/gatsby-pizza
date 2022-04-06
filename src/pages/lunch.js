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
  font-size: clamp(2rem, 2vh, 5rem);
`;

const ImageStyles = styled.div`
  display: grid;
  gap: 3rem;
`;
const LunchPriceStyles = styled.div`
  transform: rotate(-2deg);
  margin-bottom: 2rem;
  font-size: clamp(2rem, 2vh, 5rem);
`;
export default function LunchSpecialPage() {
  return (
    <div className="center">
      <SEO title="Lunch Specials" />
      <LunchH2Styles>
        <p> Lunch Special is from 11am - 3pm daily!</p>
        <p>Choose up to 3 dishes with half fried rice or noodles</p>
      </LunchH2Styles>
      <LunchPriceStyles>
        <button type="button">S $11.40</button>
        <button type="button">L $12.40</button>
      </LunchPriceStyles>
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
