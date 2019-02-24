const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/about-us.js"))),
  "component---src-pages-client-list-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/client-list.js"))),
  "component---src-pages-contact-us-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/contact-us.js"))),
  "component---src-pages-employee-surveys-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/employee-surveys.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/index.js"))),
  "component---src-pages-leadership-skills-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/leadership-skills.js"))),
  "component---src-pages-quality-of-human-capital-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/quality-of-human-capital.js"))),
  "component---src-pages-what-we-do-js": hot(preferDefault(require("/Users/NikkiFargus/Development/fargus.co.uk/src/pages/what-we-do.js")))
}

