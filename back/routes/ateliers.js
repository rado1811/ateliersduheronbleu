import express from 'express';
import connexion from '../config/db';

const router = express.Router();

const selectQuery = 'SELECT * FROM ateliers';
router.get('/', (req, res) => {
  connexion.query(selectQuery, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

export default router;
