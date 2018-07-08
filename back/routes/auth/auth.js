import express from 'express';
import connection from '../../config/db';

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// bcrypt

router.post('/signup', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const select = `INSERT INTO users (email, password, name, lastname) VALUES 
   ('${req.body.email}', '${hash}', '${req.body.name}', '${
    req.body.lastname
  }');`;
  connection.query(select, (err) => {
    if (err) {
      res.status(500).json({
        flash: err.message,
      });
    } else {
      res.status(200).json({
        flash: 'User has been signed up !',
      });
      res.end();
    }
  });
});

router.post('/signin', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(500).send(`${err} dans auth/signin`);
    if (!user) return res.status(401).json({ flash: 'Not a yet a Success' });
    const token = jwt.sign(user, 'N4bit3');
    return res.json({ user, token, flash: 'Successs' });
  })(req, res);
});

module.exports = router;
