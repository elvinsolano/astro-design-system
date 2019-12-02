const path = require('path');
const whitelist = require('./config/purgecss-whitelist');

module.exports = {
  siteMetadata: {
    title: `Astro`,
    description: `Astro Design System`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        develop: true,
        purgeOnly: [`src/css/style.css`],
        content: [
          path.join(process.cwd(), 'src/**/*.js'),
        ],
        printRejected: true,
        whitelist: whitelist
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Crimson Text\:400,700`,
          `Open Sans\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-tidy`,
    //   options: {
    //     cleanPublic: true,
    //     cleanCache: true,
    //     removeHashes: false,
    //     removeArtifacts: false,
    //     noJsMap: true,
    //     removeInlineStyles: false,
    //     jsDir: `js`,
    //     cssDir: `css`
    //   }
    // },
    `gatsby-plugin-offline`
  ]
};
