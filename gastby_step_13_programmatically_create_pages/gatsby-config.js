const dotenv = require("dotenv");

dotenv.config();


module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENT_FUL_SPACE_ID,
        accessToken: process.env.CONTENT_FUL_ACCESS_TOKEN,
      },
    },
    ]
}