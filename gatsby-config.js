import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best Chinese in Carrum Downs!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin u r adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'w0yq8klp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
