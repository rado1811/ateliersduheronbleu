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
    if (err) {
      res.send(err);
    } else {
      res.status(200).send();
    }
  });
});

router.put('/', (req, res) => {
  const sql = `UPDATE Ateliers SET ? WHERE id_atelier =${req.body.id_atelier}`;
  connection.query(sql, req.body, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

router.delete('/', (req, res) => {
  connection.query('DELETE FROM Ateliers WHERE id_atelier = ?', [req.body.id_atelier], (err, result) => {
    if (err) {
      res.status(500).end();
    } else {
      res.end('atelier supprimé');
    }
  });
});

export default router;
