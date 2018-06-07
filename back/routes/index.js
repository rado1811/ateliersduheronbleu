import express from 'express';
import connection from '../config/db';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

//sur get lancement de la requête sql sur index
router.get('/ateliers', (req, res, next) => {
  const select = 'SELECT * FROM Ateliers';
  connection.query(select, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})



export default router;
