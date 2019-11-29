const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.jsx",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCaseOnly",
              modules: {
                localIdentName: "[path][name]__[local]",
                context: path.resolve(__dirname, 'src/components'),
              },
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve("src", "stylesheets")]
              }
            }
          }
        ]
      }
    ]
  }
}
