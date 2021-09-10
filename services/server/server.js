// import dependencies
const express = require('express');

// import variable environment from dev
require('custom-env').env('server', './');

// create application object
const app = express();
// home route
app.get('/', (req, res) => {
  res.send('<h1>Hello there  </h1>');
});

// Server Listener
app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
