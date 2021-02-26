// These are customizable theme options we only need to check once
const DEFAULT_LANDING_PATH = '/';

// These templates are simply data-fetching wrappers that import components
const LandingTemplate = require.resolve(`./src/templates/Home.tsx`);
const NotFoundTemplate = require.resolve(`./src/templates/NotFound.tsx`);

exports.createPages = async ({ graphql, actions }, themeOptions) => {
  const { landingPath = DEFAULT_LANDING_PATH } = themeOptions;
  const { createPage } = actions;

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    throw new Error(`Could not query data`, result.errors);
  }

  const { site } = result.data;
  const siteTitle = site.siteMetadata.title;

  createPage({
    path: landingPath,
    context: {
      siteTitle,
    },
    component: LandingTemplate,
  });

  createPage({
    path: '/404',
    component: NotFoundTemplate,
  });
};
