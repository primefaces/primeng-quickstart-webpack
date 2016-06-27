var path = require('path');

function root(p) {
  return path.join(__dirname, p);
}

module.exports = {
  entry: './app/boot.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './app',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader", exclude: [root('node_modules/rxjs'), root('node_modules/primeng')] }
    ]
  },
  devServer: {
    historyApiFallback: true,
    progress: true,
  },
  debug: true
};