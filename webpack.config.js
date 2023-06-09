var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },

  mode: "development",

  devServer: {
    static: {

        directory: path.join(__dirname, 'build'),

    },
    port: 1239,
    devMiddleware: {

        writeToDisk: true
   
     },
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      /*  {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
      }, */
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
