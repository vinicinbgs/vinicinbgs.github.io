require(`dotenv`).config({
  path: '.env'
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteTitle: `@vinicinbgs`,
    siteTitleAlt: `Software Engineering Blog`,
    siteHeadline: `@vinicinbgs blog`,
    siteUrl: `https://vinicinbgs.github.io`,
    siteDescription: `I hope to share some techs knowledgment and contribute to the community.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@vinicinbgs`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          },
          {
            title: `Repositories`,
            slug: `/repositories`
          }
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/vinicinbgs/`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/software-engineer-vinicius-morais-dutra/`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-R4PQ4J3QY1' // Google Analytics / GA
        ],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software Engineering Blog`,
        short_name: `software-engineering-blog`,
        description: `I hope to share some techs knowledgment and contribute to the community.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': content }]
                };
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `@vinicinbgs blog RSS Feed`
          }
        ]
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
