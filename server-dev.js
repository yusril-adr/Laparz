const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.js');

const app = express();
const DIST_DIR = path.resolve(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const PORT = process.env.PORT || 8080;

// DEV SECTION

const compiler = webpack(config);

// Webpack Dev MiddleWare
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

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
