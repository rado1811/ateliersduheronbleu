import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import intervenant from './routes/intervenant';
import ateliers from './routes/ateliers';
import participants from './routes/participant';
import prereservationRouter from './routes/prereservation';
import nodemailer from './routes/nodemailer';


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
app.use('/api/ateliers', ateliers);
app.use('/api/intervenants', intervenant);
app.use('/api/participant', participants);
app.use('/api', prereservationRouter);
app.use('/mail', nodemailer);


/* eslint no-unused-vars: 0 */
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});
app.use((next) => {
  const err = new Error('Not Found');
  err.sendStatus(404);
  next(err);
});
// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
