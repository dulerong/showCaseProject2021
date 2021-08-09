const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'resources/'),
      '~js': path.resolve(__dirname, 'resources/js'),
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
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.(js|vue)?$/ 
      },
    ]
  }
})

// Extend Mix with the "i18n" method, that loads the vue-i18n-loader
mix.extend( 'i18n', new class {
  webpackRules() {
    return [
      {
        resourceQuery: /blockType=i18n/,
        type:          'javascript/auto',
        loader:        '@intlify/vue-i18n-loader',
      },
    ];
  }
}(),
);

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

// Make sure to call the .i18n() (to load the loader) before .js(..., ...)
mix.i18n()
  .js('resources/js/app.js', 'public/js').vue()
  .postCss('resources/css/app.css', 'public/css', [
      //
  ]);
