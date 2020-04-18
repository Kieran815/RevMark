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
        background_color: '#663399',
        theme_color: '#663399',
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
        baseUrl: "revmmm.wordpress.com/",
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
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
          analytics: false,
        },
        credentials: {
          apiKey: process.env.GFB_API_KEY,
          authDomain: process.env.GFB_AUTH_DOMAIN,
          databaseURL: process.env.GFB_DB_URL,
          projectId: process.env.GFB_PROJECT_ID,
          storageBucket: process.env.GFB_STORAGE_BUCKET,
          messagingSenderId: process.env.GFB_MSG_SENDER_ID,
          appId: process.env.GFB_APP_ID,
        },
      },
    },
  ],
}
