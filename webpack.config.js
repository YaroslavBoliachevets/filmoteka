const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // publicPath: '/filmoteka/',
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
            options: {
              sources: {
                list: [
                  {
                    tag: 'use',
                    attribute: 'href',
                    type: 'src', // Позволяет обрабатывать <use> в SVG
                  },
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                ],
              },
            },
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

      // Обработка изображений
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      // Для обработки SVG
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name][ext]', // Логотипы и иконки в отдельной папке
        },
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
    // hot: true, // Включает горячую замену модулей (HMR)
    liveReload: true, // Автоматически перезагружает страницу при изменении
    watchFiles: ['./src/**/*'], // Следит за файлами в папке src
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к index.html
      filename: 'index.html',
      // publicPath: '/filmoteka/', 
      publicPath: '/', 
      inject: 'body',
      minify: false, // Отключение минимизации для проверки путей
    }),

    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('CreateNoJekyll', (compilation) => {
          const outputPath = compiler.options.output.path; // Путь к папке `dist`
          fs.writeFileSync(path.resolve(outputPath, '.nojekyll'), ''); // Создает пустой файл `.nojekyll`
        });
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

console.log(
  'Обрабатываемый файл:',
  path.resolve(__dirname, 'src/img/movie-tmpl.png'),
);
