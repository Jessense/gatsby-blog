module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jessense",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",   
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }, 
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_fqOH44Uy8P6BzkNcjgfdpFUEMINpTaIyd8UThs4X3V6`,
        databaseId: `d7372a689bd24bc694219d70c2b6c853`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },    
  ],
};
