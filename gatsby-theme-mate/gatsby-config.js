const assert = require('assert');
const theme = require('./src/theme.json');

module.exports = ({
  accessToken,
  spaceId,
  deterministic = false,
  landingPath = '/',
}) => {
  assert(accessToken, 'Contentful Access Token not provided');
  assert(spaceId, 'Contentful Space ID not provided');

  return {
    siteMetadata: {
      deterministic,
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      'gatsby-plugin-styled-components',
      'gatsby-transformer-remark',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Mate Portfolio',
          short_name: 'Mate',
          start_url: landingPath,
          background_color: theme.background,
          theme_color: theme.primary,
          display: 'minimal-ui',
          icon: 'icon.png',
        },
      },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId,
          accessToken,
        },
      },
    ],
  };
};
