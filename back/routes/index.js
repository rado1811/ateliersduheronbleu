import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res, next) => {
  const select = 'SELECT * FROM Ateliers';
  connection.query(select, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

router.get('/ateliers', (req, res, next) => {
  const select = 'SELECT * FROM Ateliers';
  connection.query(select, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

export default router;
