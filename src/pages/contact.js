import React, { useState } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

export default function ContactPage() {
  const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    } ;
  `;
  const ContactStyles = styled.div``;
  const MapStyles = styled.div`
    border: 1px solid var(--grey);
    height: 400px;
  `;
  const PhoneStyles = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `;
  const Phoneh1 = styled.h1`
    font-size: clamp(3rem, 3vh, 5rem);
  `;
  const Phone = styled(HiOutlinePhone)`
    font-size: clamp(3rem, 3vh, 5rem);
    color: var(--red);
  `;
  const TradingStyles = styled.div`
    margin-bottom: 1rem;
  `;
  return (
    <div>
      <SEO title="Contact Us" />
      <ContactGrid>
        <ContactStyles>
          <PhoneStyles>
            <Phone />
            <Phoneh1>9782 6668</Phoneh1>
          </PhoneStyles>
          <TradingStyles>
            <h2>7 DAYS A WEEK</h2>
            <h2>10AM - 6PM SAT - WED</h2>
            <h2>10AM - 9PM THURS & FRI</h2>
          </TradingStyles>
          <h2>Shop 39, 100 Hall Rd</h2>
          <h2>Carrum Downs VIC</h2>
          <h2>Shopping Centre Food Court</h2>
        </ContactStyles>
        <MapStyles>MAP</MapStyles>
      </ContactGrid>
    </div>
  );
}
