const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/404.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/order.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/pages/slicemasters.js"))),
  "component---src-templates-pizza-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/templates/Pizza.js"))),
  "component---src-templates-slicemaster-js": hot(preferDefault(require("/Users/KIM/Documents/react_projects/master-gatsby-master/starter-files/gatsby/src/templates/Slicemaster.js")))
}

