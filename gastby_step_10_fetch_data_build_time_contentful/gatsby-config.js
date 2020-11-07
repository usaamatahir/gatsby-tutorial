module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6wbue6wydgh9`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `dvbvvb1d0Zfze7T3I-79QXM2KVRfFQmiE2bIKhgONR4`,
      },
    },
    ]
}