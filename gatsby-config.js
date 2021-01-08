module.exports = {
  siteMetadata: {
    title: "Alvearie",
    description: "An open source project to enable healthcare innovation",
    keywords: "alvearie, open source, health, healthcare",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    'gatsby-theme-carbon',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/` } },
  ],
};
