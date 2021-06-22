import dotenv from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV === "dev" ? "development" : "production",
  devtool: process.env.NODE_ENV === "dev" ? "inline-source-map" : undefined,
  entry: {
    meeting: "./src/meeting.ts",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  devServer:
    process.env.NODE_ENV === "dev"
      ? {
          contentBase: "./dist",
        }
      : undefined,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Meeting Keeper",
      minify: process.env.NODE_ENV !== "dev",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#4285f4",
        author: "Andrew Gremlich",
      },
      tags: {
        bodyTags: ["main"],
      },
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === "dev" ? false : true,
    minimizer: [new TerserPlugin()],
  },
};
