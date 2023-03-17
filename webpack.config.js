const { merge } = require('webpack-merge');
const { common } = require('./webpack.common');
const { dev } = require('./webpack.dev');
const { prod } = require('./webpack.prod');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return merge(common, prod);
    default:
      throw new Error('No matching configuration was found!');
  }
}