import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, title, image, description }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* metatags */}
      {/* <meta name="viewport" content="width=device-width, initial-scale" /> */}
      {/* the below meta tag fixes the bug i had with responsiveness not working in chrome but wokring in firefox for mobile phones ---need to add initial-scale-1.0 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* open graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || `/asian_food_.png`} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}
