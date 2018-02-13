const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: `bundle.js`,
    path: `${__dirname}/public`
  },
  module:{
    rules: [
      {
        test: /js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    filename: `server.js`,
    path: `${__dirname}/public`
  },
  module:{
    rules: [
      {
        test: /js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = [clientConfig, serverConfig]
