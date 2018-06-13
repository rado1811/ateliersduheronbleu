import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Ateliers', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

export default router;
