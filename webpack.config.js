const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader', // Загружает HTML как строку
          },
          {
            loader: 'posthtml-loader', // Применяет PostHTML плагины
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true, // Включает горячую замену модулей (HMR)
    liveReload: true, // Автоматически перезагружает страницу при изменении
    watchFiles: ['./src/**/*'], // Следит за файлами в папке src
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к index.html
    }),
  ],
};
