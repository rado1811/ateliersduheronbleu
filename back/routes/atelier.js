import express from 'express';

import connection from '../config/db';

const app = express();
const router = express.Router();


router.get('/atelier', (req, res) => {
  connection.query('SELECT * FROM Ateliers', (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
    }
  });
});


router.post('/atelier', (req, res) => {
  let sql = 'INSERT INTO Ateliers SET ?';
  let query = connection.query(sql, req.body, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(`${result.insertId}`);
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