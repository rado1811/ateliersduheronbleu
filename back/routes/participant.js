import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('select * from Participants left join Ateliers on Participants.id_atelier = Ateliers.id_atelier', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.post('/', (req, res) => {
  const select = `INSERT INTO Participants (email, tel, prenom, nom, id_atelier) VALUES 
    ('${req.body.email}', '${req.body.tel}', '${req.body.prenom}', '${req.body.nom}', '${req.body.id_atelier}');`;
  connection.query(select, err => {
    if (err) {
      res.endStatus(500);
    } else {
      res.status(200);
      res.end();
    }
  });
});

export default router;
