import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Ateliers', (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

router.post('/', (req, res) => {
  connection.query('INSERT INTO Ateliers SET ?', req.body, (err, result) => {
    if (err)
      res.send(err);
    else {
      res.status(200).send();
    }
  });
});

router.delete('/delete', (req, res) => {
  connection.query('DELETE from ateliers where id='+req.body.id_atelier+'', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.stringify(results));
    }
  });
});

export default router;
