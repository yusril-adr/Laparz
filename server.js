const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// listen for requests :)
app.listen(PORT, () => {
  console.log(`App listening to http://127.0.0.1:${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
