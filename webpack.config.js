module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'latest'
          ]
        }
      }
    ]
  }
}
