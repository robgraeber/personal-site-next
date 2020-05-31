const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextFonts = require('next-fonts');
const sourceMaps = require('@zeit/next-source-maps');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        webp: {
          quality: 85,
        },
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
        imagesFolder: 'chunks/images',
      },
    ],
    [nextFonts],
    [sourceMaps, { devtool: 'hidden-source-map' }],
    // other plugins go here
  ],
  {
    poweredByHeader: false,
    // other next.js configs go here
  }
);
