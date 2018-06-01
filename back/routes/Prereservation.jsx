import express from 'express';
const app = express();
const router = express.Router();
import mysql from 'mysql';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connection from '../config/db.js';

console.log('dans le fichier');

router.post('/montest', (req, res) => {
  console.log(`dans le post montest`);
});

router.post('/signup', (req, res, next) => {
  let select = `INSERT INTO Participants (email_participant, tel_participant, prenom_participant, nom_participant) VALUES 
  ('${req.body.Macoemail}', '${req.body.Macopassword}', '${
    req.body.Maconame
  }', '${req.body.Macolastname}');`;
  connection.query(select, (err, rows, fields) => {
    if (err) {
      res.status(500);
      console.log(`500 bro`);
    } else {
      res.status(200);
      console.log(`Keep going this way`);
      res.end();
    }
  });
});

export default router;
