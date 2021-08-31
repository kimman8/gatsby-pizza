import dotenv from 'dotenv';

module.exports = {
  preset: 'jest-puppeteer',
  transform: { '\\.ts$': ['ts-jest'] },
};
dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: `Lucky Start`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best Chinese in Carrum Downs!',
    twitter: '@SlicksSlices',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
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
