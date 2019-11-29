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
                // generates readable unique class names based on file path
                getLocalIdent: (context, localIdentName, localName, options) => {
                  // generates class name relative to path defined in context below
                  const relative = path.relative(options.context, context.resourcePath)
                  const parsed = path.parse(relative)

                  const arr = parsed.dir.split(path.sep).filter(p => p !== '..')
                  if (parsed.name !== 'style' && parsed.name !== arr[arr.length - 1]) {
                    arr.push(parsed.name)
                  }

                  let result = arr.join('-')
                  if (localName !== 'wrapper') {
                    result = `${result}__${localName}`
                  }

                  return result
                },
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
