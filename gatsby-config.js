/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-source-tumblr`,
    options: {
      blogIdentifier: `ultra40sec.tumblr.com`,
      consumerKey: `uK4ih9J52Uspb8vFj85cl6gtptQLaXbLRtetFnYBc8tXtkYvRi`,
    },
  },]
}
