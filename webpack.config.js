"use strict";

module.exports = {
  entry: './main',
  output: {
    filename: './build/js/bandle.js',
    library: 'main'
  },
};


/*
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'output.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  },
  plugins : [ 
    new webpack.ProvidePlugin({
      $ : "jquery",
      Backbone : "backbone",
      _ : "underscore"
    })
  ]
};

*/
/*
module.exports = {
  entry: './index.js',
  output: { 
    filename: '[name].js' 
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    })
  ]
};
*/
