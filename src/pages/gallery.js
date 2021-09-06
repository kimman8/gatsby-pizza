import React from 'react';
import SEO from '../components/SEO';
import LS from '../assets/images/luckyStart.jpeg';

export default function GalleryPage() {
  return (
    <div>
      <SEO title="Gallery" />
      <h1 className="center">Gallery</h1>
      <img src={LS} alt="" />
    </div>
  );
}
