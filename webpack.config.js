var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'dist');

var config = {
  devtool: 'source-map',
  //devtool: 'eval',
  entry: ['./js/client.js'],
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules','js'],
    alias: {
      'components': __dirname + '/js/components/',
      'stores': __dirname + '/js/stores',
      'actions': __dirname + '/js/actions',
      'js': __dirname + '/js'
    }
  },
  module: {
    /*
    preLoaders: [{
      test: /\.js$/, 
      loader: "eslint-loader", 
      exclude: /node_modules/
    }],
    */
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }
    /*, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|eot|ttf|svg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }*/],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  eslint: {
    configFile: '.eslintrc'
  }
};

module.exports = config;