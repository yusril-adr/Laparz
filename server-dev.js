const path = require('path');
const express = require('express');

const app = express();
const DIST_DIR = path.resolve(__dirname, 'dist');
const HTML_FILE = path.resolve(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 8080;

// DEV SECTION

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.js');

const compiler = webpack(config);

// https://webpack.js.org/guides/development/#using-webpack-dev-middleware
app.use(webpackDevMiddleware(compiler));

// https://webpack.js.org/guides/hot-module-replacement/
app.use(webpackHotMiddleware(compiler));

// END OF DEV SECTION

app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App listening to http://127.0.0.1:${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
