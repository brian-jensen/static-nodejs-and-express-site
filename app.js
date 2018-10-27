const express = require('express');
const app = express();
const opn = require('opn');
const port = 3000;

// Sets "static" route for static assets
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
// Gets application routes 
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);
// Generates new 404 error when and invalid route is entered into the browser
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});
// Renders error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});
// Starts application server
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
// Serves application to users default web browser
opn(`http://localhost:${port}`);