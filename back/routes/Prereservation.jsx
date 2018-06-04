import express from 'express';
const router = express.Router();
import mysql from 'mysql';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connection from '../config/db.js';

console.log('dans la /.routes./Prereservation.jsx');

router.post('/montest', (req, res) => {
  console.log('dans le post montest');
});

router.post('/participants', (req, res) => {
  console.log(req.body);
  let select = `INSERT INTO Participants (email, tel, prenom, nom) VALUES 
  ('${req.body.email}', '${req.body.telephone}', '${req.body.prenom}', '${req.body.nom}');`;
  connection.query(select, (err, rows) => {
    if (err) {
      res.status(500);
      console.log('500 bro');
    } else {
      res.status(200);
      console.log('Keep going this way');
      res.end();
    }
  });
});

export default router;
