import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import styled from "styled-components";
import WrappedMap from "../components/Map";
import SEO from "../components/SEO";

export default function ContactPage() {
  const ContactGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ContactStyles = styled.div`
    margin-bottom: 2rem;
  `;

  const SocialMediaStyles = styled.div`
    margin-bottom: 1rem;
  `;
  const SocialIconsStyles = styled.div``;
  const SocialTextStyles = styled.h3`
    text-align: center;
  `;
  const Facebook = styled(GrFacebookOption)`
    font-size: 3rem;
    padding: 1rem;
    color: var(--white);
    background: var(--black);
    border-radius: 2.5rem;
    margin: 1.25rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background: var(--red);
    }
  `;

  const Instagram = styled(FaInstagram)`
    font-size: 3rem;
    padding: 1rem;
    color: var(--white);
    background: var(--black);
    border-radius: 2.5rem;
    margin: 1.25rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background: var(--red);
    }
  `;
  const MapStyles = styled.div`
    border: 1px solid var(--grey);
    height: 400px;
    max-width: 900px;
    width: 80vw;
  `;
  const PhoneStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    <Router>
      <SEO title="Contact Us" />
      <ContactGrid className="center">
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
        <SocialMediaStyles>
          <SocialTextStyles>
            Follow us @LuckyStartChinese #LuckyStartChinese
          </SocialTextStyles>
          <SocialIconsStyles>
            <a
              target="_blank"
              href="https://www.instagram.com/luckystartchinese/"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/LuckyStartChinese"
            >
              <Facebook />
            </a>
          </SocialIconsStyles>
        </SocialMediaStyles>
        <MapStyles>
          <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeBOrS-OEtJaC59Gs91w2fmgyDFEVZZfA"
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </MapStyles>
      </ContactGrid>
    </Router>
  );
}
