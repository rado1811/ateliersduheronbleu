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
    req.body.data.id_intervenant
  }`;

  connection.query(sql, req.body.data, (err) => {
    if (err) res.send(err);
    else {
      res.status(200).send();
    }
  });
});

router.delete('/', (req, res) => {
  connection.query(
    'DELETE FROM Intervenants WHERE id_intervenant = ?',
    [req.body.id_intervenant],
    (err, result) => {
      if (err) {
        res.status(500).end();
      } else {
        res.end('intervenant supprimé');
      }
    }
  );
});

export default router;
