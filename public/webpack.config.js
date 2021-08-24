const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: "/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker App",
      short_name: "Budget Tracker",
      description: "Budget Tracker",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: "/icons/icon-192x192.png",
          sizes: 192,
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: [96, 128, 192, 256, 384, 512],
        }
      ]
    })
  ]

  
};
module.exports = config;