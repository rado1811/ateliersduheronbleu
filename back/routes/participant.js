import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Participants left join Ateliers on Participants.id_atelier = Ateliers.id_atelier', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/reserve', (req, res) => {
  connection.query('SELECT * FROM Participants left join Ateliers on Participants.id_atelier = Ateliers.id_atelier where Participants.statut != "annulé"', (err, data) => {
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
  connection.query(select, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ id: result.insertId });
    }
  });
});

router.put('/valider', (req, res) => {
  const sql = `UPDATE Participants SET statut = 'validé' WHERE id_participant =${req.body.id_participant}`;
  connection.query(sql, req.body.data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json({status: 'validé'});
    }
  });
});

router.put('/annuler', (req, res) => {
  const sql = `UPDATE Participants SET statut = 'annulé' WHERE id_participant =${
    req.body.id_participant
    }`;
  connection.query(sql, req.body.data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json({status: 'annulé'});
    }
  });
});


router.delete('/', (req, res) => {
  connection.query('DELETE FROM Participants WHERE id_participant = ?', [req.body.id_participant], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;