const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
    },
    mode: 'development',
  module: {
    rules: [
      {
        test: /\.?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
          },
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
          },
        {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
    ]
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist/'),
  //     publicPath: '/',
  //     filename: 'bundle.js'
  //   },
  //   proxy: {
  //     '/api': 'http://localhost:3001'
  //   },
  //   port: 8080,
  //   hot: true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}