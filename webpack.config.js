const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'api.bundle.js'
  },
  target: 'node'
};