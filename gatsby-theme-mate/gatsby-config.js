const assert = require('assert');

module.exports = ({ accessToken, spaceId, deterministic }) => {
  assert(accessToken, 'Contentful Access Token not provided');
  assert(spaceId, 'Contentful Space ID not provided');

  const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `${about.name} Portfolio`,
        short_name: about.name,
        start_url: '/',
        background_color: about.colors.background,
        theme_color: about.colors.primary,
        display: 'minimal-ui',
        icon: 'media/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@emasuriano' || about.mediumUser || '@medium',
      },
    },
  ];

  return {
    plugins,
    siteMetadata: {
      isMediumUserDefined: true,
      deterministic,
    },
  };
};
