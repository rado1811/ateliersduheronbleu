import express from 'express';

const router = express.Router();

let selectQuery = 'SELECT * FROM ateliers';
router.get('/ateliers', (req, res, next) => {
  sqlConnexion.query(selectQuery, function(err, rows) {
    if (err) throw err;
    res.json(rows);
  });
})


export default router;
