const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'resources/'),
      '~pages': path.resolve(__dirname, 'resources/js/vue/pages'),
      '~layouts': path.resolve(__dirname, 'resources/js/vue/layouts'),
      '~components': path.resolve(__dirname, 'resources/js/vue/components'),
      'GlobalSass': path.resolve(__dirname, 'resources/sass/variables.sass')
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
    ]
  }
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
  .postCss('resources/css/app.css', 'public/css', [
      //
  ]);
