const express = require('express');
const app = express();
const opn = require('opn');
const port = 3000;

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);

app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

opn(`http://localhost:${port}`);