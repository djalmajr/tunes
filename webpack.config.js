const path = require("path");
const autoprefixer = require("autoprefixer");
const CleanPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const ExternalsPlugin = require("html-webpack-externals-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");

const { PORT = 8080, HOST = "localhost" } = process.env;

const DEV = process.env.NODE_ENV === "development";

const plugins = [
  new CleanPlugin(["dist"]),
  new HtmlPlugin({
    title: "Tunes",
    description: "Tunes",
    template: path.resolve(__dirname, "public/index.ejs"),
    stylesheets: ["base.css"],
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
    },
  }),
  new MiniCssPlugin({ filename: "style.css" }),
  new CopyPlugin([
    { from: "*.css", to: ".", context: "public" },
    { from: "*.ico", to: ".", context: "public" },
    { from: "**/*", to: "assets", context: "src/assets" },
  ]),
  new ExternalsPlugin({
    externals: [
      {
        module: "hyperhtml",
        global: "HyperHTMLElement",
        entry: DEV ? "min.js" : "https://unpkg.com/hyperhtml-element@3.1.0/min.js",
      },
      {
        module: "mobx",
        global: "mobx",
        entry: DEV
          ? "lib/mobx.umd.min.js"
          : "https://unpkg.com/mobx@5.5.2/lib/mobx.umd.min.js",
      },
      {
        module: "classnames",
        global: "classNames",
        entry: DEV ? "index.js" : "https://unpkg.com/classnames@2.2.6/index.js",
      },
    ],
  }),
];

module.exports = {
  plugins,
  entry: "./src/index.js",
  devtool: DEV ? "inline-cheap-source-map" : undefined,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          DEV ? { loader: "style-loader" } : MiniCssPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: true,
              localIdentName: "[name]-[local]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer],
            },
          },
          { loader: "less-loader" },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    overlay: true,
    open: true,
    host: HOST,
    port: PORT,
    publicPath: `http://localhost:${PORT}/`,
    stats: {
      chunks: false,
      colors: true,
      reasons: false,
    },
  },
};
