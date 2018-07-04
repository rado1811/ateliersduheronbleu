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
  console.log(req.body);
  connection.query('INSERT INTO Ateliers SET ?', req.body, (err) => {
    if (err) res.send(err);
    else {
      res.status(201).send();
    }
  });
});

router.put('/', (req, res) => {
  const sql = `UPDATE Ateliers SET ? WHERE id_atelier =${
    req.body.data.id_atelier
  }`;
  connection.query(sql, req.body.data, (err) => {
    if (err) res.send(err);
    else {
      res.status(200).send();
    }
  });
});

router.delete('/:id', (req) => {
  const deleted = `DELETE FROM Ateliers WHERE id=${req.params.id}`;
  connection.query(deleted, (err) => {
    if (err) throw err;
  });
});

export default router;
