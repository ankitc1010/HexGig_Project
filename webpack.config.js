var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
  'script-loader!jquery/dist/jquery.min.js',
  'script-loader!tether/dist/js/tether.min.js','firebase', 'react', 'react-dom', 'react-progressbar', 'react-redux', 'react-router', 'redux', 'redux-thunk'
];
module.exports = {
  entry: {
    bundle:'./app/app.jsx',
    vendor:VENDOR_LIBS
  },


  externals: {
    jquery: 'jQuery',
    tether: 'tether'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      "window.jQuery": "jquery",
            "window.Tether": 'tether'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names:['vendor','manifest']
    }),
    new HTMLWebpackPlugin({
      template:'app/index.html'
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {

    alias: {

      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      bootstrapJs: 'bootstrap/dist/js/bootstrap.min.js',
      bootstrapCss: 'bootstrap/dist/css/bootstrap.min.css',
      tether: 'tether/dist/js/tether.min.js',
      owlCarouselJs: 'owl-carousel-2/owl.carousel.min.js',
      owlCarouselCss: 'owl-carousel-2/assets/owl.carousel.min.css',
      reducers: path.resolve(__dirname, 'app/reducers/index.jsx'),
      store: path.resolve(__dirname, 'app/store/index.jsx'),
      actions: path.resolve(__dirname, 'app/actions/index.jsx'),
      firebaseCredentials: path.resolve(__dirname, 'app/firebaseCredentials/index.jsx'),
      img: path.resolve(__dirname, 'app/img')


    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: ExtractTextPlugin.extract({loader: ['css-loader', 'sass-loader']}),
        test:/\.s?css$/
      },
      {
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        {loader: 'url-loader',
        options: {limit: 40000}}
        , 'image-webpack-loader'
      ]
    }
    ]
  },
  // devtool: 'cheap-module-eval-source-map'
};
