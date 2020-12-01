const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //...
    externals: {
      lodash: '_',
      gsap: 'gsap',
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
              "style-loader",
              "css-loader",
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true,
                      sassOptions: {
                          outputStyle: "compressed",
                      },
                  },
              }
          ],
          include: [path.resolve(__dirname, 'src/')]
        },
      ],
    },
    plugins: [
      new MiniCSSExtractPlugin({
          filename: "/dist/input.css",
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      filename: 'index.html',
      compress: true,
      port: 8080
  },
  entry: ['./src/script.js', './src/index.html'],//si no pones index.js break .
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
  }