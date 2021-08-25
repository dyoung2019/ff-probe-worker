const path = require('path')

module.exports = {
  mode: "production",
  entry:  "./src/my.worker.ts",
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },  
  stats: {
    children: true,
  },
};