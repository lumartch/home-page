const { merge } = require('webpack-merge');
const { common } = require('./webpack.common');
const { dev } = require('./webpack.dev');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return common;
    default:
      throw new Error('No matching configuration was found!');
  }
}