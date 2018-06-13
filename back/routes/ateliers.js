import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/ateliers', (req, res) => {
  connection.query('SELECT * FROM Ateliers', (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

export default router;
