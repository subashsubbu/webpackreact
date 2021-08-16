const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: "jspsych-react-cra.js",
    library: "jspsych-react-cra",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
  ],
  },
  resolve: {
    extensions: ["*", '.js', '.jsx']
  },
  plugins: [new UglifyJsPlugin()],
}