import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/ateliers', (req, res, next) => {
  connection.query('SELECT * FROM Intervenants', (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data);
        }
    });
});



module.exports = router;
