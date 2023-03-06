const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = {
  entry: './src/index.tsx',
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jpg|gif|svg)$/i,
            use: [
            {
                loader: 'url-loader',
                options: {
                limit: 8192,
                },
            },
            ],
        },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};

module.exports = { common }