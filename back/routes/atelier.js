import express from 'express';
import mysql from 'mysql';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connection from '../config/db.js';

const app = express();
const router = express.Router();


router.get('/atelier', (req, res ) => {
  connection.query('SELECT * FROM Ateliers', (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data);
        }
    });
});


router.post('/atelier', (req, res) => {
  let sql = 'INSERT INTO Ateliers SET ?';
  console.log(sql)
  let query = connection.query(sql, req.body, (err, result) => {
    console.log(query)
    if (err) {
      res.sendStatus(500);
    }
    res.send(`${result.insertId}`);
  });
});

router.delete('/atelier/:id', (req, res, next) => {
  let deleted = `DELETE FROM Ateliers WHERE id=${req.params.id}`
  connection.query(deleted, function(err, rows) {  
      if (err)
        throw err;
    });
  });


export default router;
