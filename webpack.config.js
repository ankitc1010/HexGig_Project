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
      Main: path.resolve(__dirname,'app/components/Main'),
      Jumbotron: path.resolve(__dirname,'app/components/JumbotronComponents/jumbotron'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      bootstrapJs: 'bootstrap/dist/js/bootstrap.min.js',
      bootstrapCss: 'bootstrap/dist/css/bootstrap.min.css',
      tether: 'tether/dist/js/tether.min.js',
      owlCarouselJs: 'owl-carousel-2/owl.carousel.min.js',
      owlCarouselCss: 'owl-carousel-2/assets/owl.carousel.min.css',
      IndexPage: path.resolve(__dirname, 'app/components/IndexPage'),
      OwlCarousel: path.resolve(__dirname, 'app/components/IndexPageComponents/OwlCarousel'),
      SignInDiv: path.resolve(__dirname, 'app/components/IndexPageComponents/SignInDiv'),
      LoaderScreen: path.resolve(__dirname, 'app/components/LoaderScreen'),
      MainPortal: path.resolve(__dirname, 'app/components/MainPortal'),
      reducers: path.resolve(__dirname, 'app/reducers/index.jsx'),
      store: path.resolve(__dirname, 'app/store/index.jsx'),
      actions: path.resolve(__dirname, 'app/actions/index.jsx'),
      firebaseCredentials: path.resolve(__dirname, 'app/firebaseCredentials/index.jsx'),
      img: path.resolve(__dirname, 'app/img'),
      AdminLoginPage: path.resolve(__dirname, 'app/components/AdminLoginPage'),
      AdminPage: path.resolve(__dirname, 'app/components/AdminPage'),
      NavBar: path.resolve(__dirname, 'app/components/NavBarComponents/NavBar'),
      EventsDiv: path.resolve(__dirname, 'app/components/IndexPageComponents/EventsDiv'),
      About: path.resolve(__dirname, 'app/components/IndexPageComponents/About'),
      NewsLetter: path.resolve(__dirname, 'app/components/IndexPageComponents/NewsLetter'),
      EventPage: path.resolve(__dirname, 'app/components/EventPageTest'),
      UserPage: path.resolve(__dirname, 'app/components/UserPageTest'),
      ListRow: path.resolve(__dirname, 'app/components/UserPageComponents/ListRow'),
      UserPageTest: path.resolve(__dirname, 'app/components/UserPageTest'),
      EventList: path.resolve(__dirname,'app/components/EventsList'),
      EventPageTest: path.resolve(__dirname,'app/components/EventPageTest'),
      RowComponent: path.resolve(__dirname,'app/components/EventsListComponent/RowComponent'),
      CertificateGeneration: path.resolve(__dirname,'app/components/AdminPageComponents/CertificateGeneration'),
      EventCreation: path.resolve(__dirname,'app/components/AdminPageComponents/EventCreation'),
      IndexAdminPage: path.resolve(__dirname,'app/components/AdminPageComponents/IndexAdminPage'),
      VolunteerAddAdminPage: path.resolve(__dirname,'app/components/AdminPageComponents/VolunteerAddAdminPage'),
      VolunteerDisplayPage: path.resolve(__dirname,'app/components/AdminPageComponents/VolunteerDisplayPage'),


      ClaimRow: path.resolve(__dirname, 'app/components/AdminPageComponents/ClaimRow'),
      AdminCreateMember: path.resolve(__dirname, 'app/components/AdminPageComponents/AdminCreateMember'),



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
