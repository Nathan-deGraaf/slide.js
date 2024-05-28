const mix = require('laravel-mix');
require('laravel-mix-copy-watched');
require('laravel-mix-compress');

mix.setPublicPath('./public');

mix.sass('src/index.scss', 'styles').version();
mix.js('src/index.js', 'js').version();

if ( mix.inProduction() ) {
  mix.sourceMaps( true, 'source-map' )
    .version();
}

mix.options({
  processCssUrls: false,
  postCss: [ //remove css comments on builds
    require( 'postcss-discard-comments' )({
      removeAll: true
    })
  ],
  uglify: { //remove js Non-licence comments on builds
    uglifyOptions: {
      comments: false
    },
  }
});

mix.compress( {
  productionOnly: true,
  useBrotli: true, //Brotli Compression
  useZopfli: true, //GZip Compression - slower
  minRatio: 1
});

mix.disableSuccessNotifications();