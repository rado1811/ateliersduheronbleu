import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import prereservation from './routes/prereservation';
import adminAteliers from './routes/adminateliers';
import formulaireIntervenant from './routes/formulaireIntervenant';

const app = express();
const debug = Debug('back:app');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/client', prereservation);
app.use('/admin', adminAteliers);
app.use('/admin', formulaireIntervenant);

// catch 404 and forward to error handler
app.use(next => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on('uncaughtException', err => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
