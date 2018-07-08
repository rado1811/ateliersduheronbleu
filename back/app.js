import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import connection from './config/db';

import intervenant from './routes/intervenant';
import ateliers from './routes/ateliers';
import prereservationRouter from './routes/prereservation';
import nodemailer from './routes/nodemailer';

const app = express();
const debug = Debug('back:app');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const auth = require('./routes/auth/auth');

// JWT
app.get(
  '/admin/dashboard',
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    res.send(req.user);
  }
);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
/** ROUTES */
app.use('/api/ateliers', ateliers);
app.use('/api/intervenants', intervenant);
app.use('/api', prereservationRouter);
app.use('/mail', nodemailer);
app.use('/auth', auth);

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
// catch 404 and forward to error handler
app.use((next) => {
  const err = new Error('Not Found');
  err.sendStatus(404);
  next(err);
});

// Passport
passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    (email, password, done) => {
      try {
        connection.query(
          `select * from Utilisateurs where email=?`,
          [email],
          (err, rows) => {
            console.log(rows);
            if (err) {
              return done(err, 'Not good enouth');
            } else if (!rows[0]) {
              return done(null, false, {
                flash: 'No user found',
              });
            } else if (bcrypt.compareSync(password, rows[0].password)) {
              const user = {
                email: rows[0].email,
              };
              return done(null, user);
            } else {
              return done(null, false, {
                flash: 'Wrong password',
              });
            }
          }
        );
      } catch (e) {
        console.log('err', e);
      }
    }
  )
);

// Jason Web Token
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'N4bit3',
    },
    (jwtPayload, cb) => {
      return cb(null, jwtPayload);
    }
  )
);

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
