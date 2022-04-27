const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 8080,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      }
    ]
  }
}
