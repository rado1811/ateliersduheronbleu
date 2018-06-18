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

router.post('/ateliers', (req, res) => {
  connection.query('INSERT INTO Ateliers SET ?', req.body, (err, result) => {
    if (err)
      res.send(err);
    else {
      res.status(200).send();
    }
  });
});

router.delete('/atelier/:id', (req, res, next) => {
  let deleted = `DELETE FROM Ateliers WHERE id=${req.params.id}`
  connection.query(deleted, function (err, rows) {
    if (err)
      throw err;
  });
});

export default router;
