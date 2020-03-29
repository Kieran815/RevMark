module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Rev Mark M Milligan","short_name":"Rev Mark M Milligan","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/Rooster.jpg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-firebase/gatsby-browser.js'),
      options: {"plugins":[],"features":{"auth":true,"database":true,"firestore":false,"storage":false,"messaging":false,"functions":true,"performance":false,"analytics":false},"credentials":{"apiKey":"AIzaSyDRU7Yhm_lhZhDZkvtDmBhIw6cgp7m5Knw","authDomain":"personal-website-e8f4e.firebaseapp.com","databaseURL":"https://personal-website-e8f4e.firebaseio.com","projectId":"personal-website-e8f4e","storageBucket":"personal-website-e8f4e.appspot.com","messagingSenderId":"60806743216","appId":"1:60806743216:web:515e021a2efd11bd886775"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
