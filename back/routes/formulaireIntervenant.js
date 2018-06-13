import express from 'express';
import mysql from 'mysql';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connection from '../config/db.js';

const app = express();
const router = express.Router();

router.post('/intervenant', (req, res) => {
  let sql = 'INSERT INTO Intervenants SET ?';
  let query = connection.query(sql, req.body, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`${result.insertId}`);
  });
});


export default router;