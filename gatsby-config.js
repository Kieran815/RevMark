// source from https://github.com/codebushi/gatsby-starter-strata

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Rev Mark M Milligan',
    author: 'K Michael Milligan',
    description:
      'Profile and Blog of Rev Mark Michael Milligan, Teacher and Pastor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rev Mark M Milligan',
        short_name: 'Rev Mark M Milligan',
        start_url: '/',
        background_color: 'blue',
        theme_color: 'blue',
        display: 'minimal-ui',
        icon: 'src/assets/images/Rooster.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'revmmm.wordpress.com/',
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: true,
          database: true,
          firestore: true,
          storage: true,
          messaging: true,
          functions: true,
          performance: true,
          analytics: true,
        },
        credentials: {
          apiKey: process.env.GFB_API_KEY,
          authDomain: process.env.GFB_AUTH_DOMAIN,
          databaseURL: process.env.GFB_DB_URL,
          projectId: process.env.GFB_PROJECT_ID,
          storageBucket: process.env.GFB_STORAGE_BUCKET,
          messagingSenderId: process.env.GFB_MSG_SENDER_ID,
          appId: process.env.GFB_APP_ID,
          measurementId: process.env.GFB_MEASUREMENT_ID
        },
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: 'UCSc6ebNSxRFrbenT97g6u4Q',
        apiKey: process.env.YT_API_KEY,
        maxVideos: 50,
      },
    },
  ],
}
