var plugins = [{
      plugin: require('C:/Users/kim/Desktop/js/gatsby pizza/gatsby-pizza/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/kim/Desktop/js/gatsby pizza/gatsby-pizza/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/kim/Desktop/js/gatsby pizza/gatsby-pizza/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"w0yq8klp","dataset":"production","watchMode":true,"token":"skLSSkz9YnBTRS3JG9wfQ82qc5au5C8dNWvF6fFa5EaLOJuEV49vbU1MssZwbPkD2wnbpYJFzDhpoYuJgGyD56mzUS2o1bHv326Q9pFW79hScQpnYwjorGyZSKbJNLXT0Yi8lQqe76X0sjr4XAIjapIK5E2EIII9JxcXSSKgCk4TwMMiD9aU"},
    },{
      plugin: require('C:/Users/kim/Desktop/js/gatsby pizza/gatsby-pizza/gatsby-ssr'),
      options: {"plugins":[]},
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
