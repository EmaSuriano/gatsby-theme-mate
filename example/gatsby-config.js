require('dotenv').config({ path: '../.env' });

const { ACCESS_TOKEN, SPACE_ID } = process.env;

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-mate`,
      options: {
        accessToken: ACCESS_TOKEN,
        spaceId: SPACE_ID,
      },
    },
  ],
};
