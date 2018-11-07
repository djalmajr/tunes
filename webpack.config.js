const getConfig = require("wprun");

const DEV = process.env.NODE_ENV === "development";

module.exports = getConfig(__dirname, {
  copyPluginOptions: [
    { from: "*.ico", to: "./", context: "assets" },
    { from: "**/*", to: "assets", context: "assets" },
  ],
  htmlPluginOptions: {
    title: "Tunes",
    description: "Tunes",
  },
  externalsPluginOptions: {
    externals: [
      {
        module: "hyperhtml-element",
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
  },
});
