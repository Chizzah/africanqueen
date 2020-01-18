// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'AfricanQueen',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'w3ondfbk7z8x', // required
        accessToken: 'wQEUNRKyGYJVRkwSqISBqpJQv0aD5SJ4WeGziOirAn8', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keyFduZgbKPAhWLS4', // required
        baseId: 'appvPrpe3RomgUhZA', // required
        tableName: 'T-Shirts', // required
        typeName: 'Product', // required
        select: {}, // optional
      },
    },
  ],
  templates: {
    Product: '/product/:slug', // optional
    ContentfulBlogPost: '/blog/:slug',
  },
}
