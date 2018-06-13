import express from 'express';
import mysql from 'mysql';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connection from '../config/db.js';

const app = express();
const router = express.Router();

router.get('/intervenant', (req, res, next) => {
    connection.query('SELECT * FROM Intervenants', (err, data) => {
          if (err) {
              res.send(err)
          } else {
              res.json(data);
          }
      });
  });

  router.post('/intervenant', (req, res) => {
    let sql = 'INSERT INTO Intervenants SET ?';
    let query = connection.query(sql, req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(`${result.insertId}`);
    });
  });

router.delete('/intervenant/:id', (req, res) => {
  let deletedIntervenant = `DELETE FROM Intervenants WHERE id=${req.params.id}`
  connection.query(deletedIntervenant, function(err, rows) {
    if (err)
      throw err;
  });
});


export default router;

