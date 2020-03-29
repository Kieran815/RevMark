var plugins = [{
      plugin: require('/home/terminal/Documents/WebDev/freelance/mmmrev/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/terminal/Documents/WebDev/freelance/mmmrev/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Rev Mark M Milligan","short_name":"Rev Mark M Milligan","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/Rooster.jpg"},
    },{
      plugin: require('/home/terminal/Documents/WebDev/freelance/mmmrev/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/terminal/Documents/WebDev/freelance/mmmrev/node_modules/gatsby-plugin-firebase/gatsby-ssr'),
      options: {"plugins":[],"features":{"auth":true,"database":true,"firestore":false,"storage":false,"messaging":false,"functions":true,"performance":false,"analytics":false},"credentials":{"apiKey":"AIzaSyDRU7Yhm_lhZhDZkvtDmBhIw6cgp7m5Knw","authDomain":"personal-website-e8f4e.firebaseapp.com","databaseURL":"https://personal-website-e8f4e.firebaseio.com","projectId":"personal-website-e8f4e","storageBucket":"personal-website-e8f4e.appspot.com","messagingSenderId":"60806743216","appId":"1:60806743216:web:515e021a2efd11bd886775"}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
