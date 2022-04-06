import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import styled from 'styled-components';
import WrappedMap from '../components/Map';
import SEO from '../components/SEO';

export default function ContactPage() {
  const ContactGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const ContactStyles = styled.div`
    /* margin-bottom: 2rem; */
  `;

  const SocialMediaStyles = styled.div`
    margin-bottom: 1rem;
  `;
  const SocialIconsStyles = styled.div``;
  const SocialTextStyles = styled.p`
    font-size: clamp(2rem, 2vh, 5rem);
  `;
  const Facebook = styled(GrFacebookOption)`
    font-size: clamp(2rem, 2vh, 5rem);
    padding: 1rem;
    color: var(--white);
    background: var(--black);
    border-radius: 50%;
    margin: 1.25rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background: var(--red);
    }
  `;

  const Instagram = styled(FaInstagram)`
    font-size: clamp(2rem, 2vh, 5rem);
    padding: 1rem;
    color: var(--white);
    background: var(--black);
    border-radius: 50%;
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
    /* margin-bottom: 1rem; */
  `;
  const ContactTextStyles = styled.p`
    font-size: clamp(2rem, 2vh, 5rem);
  `;
  const Phone = styled(HiOutlinePhone)`
    font-size: clamp(1rem, 2vh, 5rem);
    color: var(--red);
  `;
  const TradingStyles = styled.div`
    margin-bottom: 3rem;
    border: solid var(--grey) 3px;
  `;
  return (
    <div>
      <SEO title="Contact Us" />
      <ContactGrid className="center">
        <ContactStyles>
          <PhoneStyles>
            <Phone />
            <ContactTextStyles>9782 6668</ContactTextStyles>
          </PhoneStyles>
          <TradingStyles>
            <ContactTextStyles>
              <p>OPEN EVERY DAY</p>
              <p>10AM - 6PM MON - WED</p>
              <p>10AM - 7PM THURS & FRI</p>
              <p>10AM - 5PM SAT & SUN</p>
            </ContactTextStyles>
          </TradingStyles>
          <ContactTextStyles>
            <p>Shop 39, 100 Hall Rd</p>
            <p>Carrum Downs VIC</p>
            <p>Shopping Centre Food Court</p>
          </ContactTextStyles>
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
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </MapStyles>
      </ContactGrid>
    </div>
  );
}
