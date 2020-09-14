const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      // File loader for image
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      // File loader for font
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      favicon: path.resolve('src', 'public', 'images', 'icon.png'),
      filename: 'index.html',
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Laparz',
      short_name: 'Laparz',
      description: 'Aplikasi yang akan membantu anda untuk mencari restoran dengan makanan terbaik di sekitar anda.',
      start_url: '/',
      display: 'standalone',
      background_color: '#ee620d',
      theme_color: '#f37121',
      inject: true,
      fingerprints: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src', 'public', 'images', 'icon.png'),
          sizes: [192, 256, 384, 512],
          ios: true,
          destination: 'images',
          purpose: 'any',
        },
        {
          src: path.resolve('src', 'public', 'images', 'maskable.png'),
          sizes: [192, 256, 384, 512],
          ios: true,
          destination: 'images',
          purpose: 'maskable',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/service-worker.js',
      swDest: 'service-worker.js',
    }),
  ],
};
