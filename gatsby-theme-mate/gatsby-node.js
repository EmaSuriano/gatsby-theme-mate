const assert = require('assert');
const gatsbySourceMedium = require('gatsby-source-medium/gatsby-node');
const { createClient } = require('contentful');

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about';

const LandingTemplate = require.resolve(`./src/templates/Home.tsx`);
const NotFoundTemplate = require.resolve(`./src/templates/NotFound.tsx`);

exports.sourceNodes = async (gatsbyConfig, themeOptions) => {
  const { spaceId: space, accessToken } = themeOptions;
  const client = createClient({ space, accessToken });

  const { items } = await client.getEntries();
  const about = items.find(getAboutEntry);
  assert(about, "Can't fetch about entry from Contentful");
  const { mediumUser = '@medium' } = about.fields;

  await gatsbySourceMedium.sourceNodes(gatsbyConfig, { username: mediumUser });
};

exports.createPages = async ({ actions }, themeOptions) => {
  const { landingPath = '/' } = themeOptions;
  const { createPage } = actions;

  createPage({
    path: landingPath,
    component: LandingTemplate,
  });

  createPage({
    path: '/404',
    component: NotFoundTemplate,
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assert: require.resolve('assert'),
      },
      fallback: { fs: false },
    },
  });
};
