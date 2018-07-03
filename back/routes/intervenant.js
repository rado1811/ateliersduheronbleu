import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Intervenants', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.post('/', (req, res) => {
  const sql = 'INSERT INTO Intervenants SET ?';
  connection.query(sql, req.body, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`${result.insertId}`);
  });
});

router.put('/', (req, res) => {
  const sql = `UPDATE Intervenants SET ? WHERE id_intervenant =${
    req.body.id_intervenant
  }`;
  connection.query(sql, req.body, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

router.delete('/:id', (req) => {
  const deletedIntervenant = `DELETE FROM Intervenants WHERE id=${
    req.params.id
  }`;
  connection.query(deletedIntervenant, (err) => {
    if (err) throw err;
  });
});

export default router;
