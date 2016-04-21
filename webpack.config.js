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
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  }
};