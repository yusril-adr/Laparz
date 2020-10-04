const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
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
      favicon: path.resolve('src', 'public', 'icon.png'),
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
          src: path.resolve('src', 'public', 'icon.png'),
          sizes: [192, 256, 384, 512],
          ios: true,
          purpose: 'any',
        },
        {
          src: path.resolve('src', 'public', 'maskable.png'),
          sizes: [192, 256, 384, 512],
          ios: true,
          purpose: 'maskable',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/service-worker.js',
      swDest: 'service-worker.js',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/images/'),
          to: path.resolve(__dirname, 'dist/images/'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
};
