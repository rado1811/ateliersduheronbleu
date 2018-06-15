import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.post('/participant', (req, res) => {
  const select = `INSERT INTO Participants (email, tel, prenom, nom) VALUES 
  ('${req.body.email}', '${req.body.telephone}', '${req.body.prenom}', '${req.body.nom}');`;
  connection.query(select, (err) => {
    if (err) {
      res.endStatus(500);
    } else {
      res.status(200);
      res.end();
    }
  });
});


export default router;
