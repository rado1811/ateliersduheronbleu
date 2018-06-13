import express from 'express';
import connection from '../config/db';

const router = express.Router();

router.post('/ateliers', (req, res, next) => {
  const nom = req.body.nom;
  const id_intervenant = req.body.id_intervenant;
  const debut = req.body.debut;
  const nb_participants = req.body.nb_participants;
  const prix = req.body.prix;
  const contenu = req.body.contenu;
  const formule = req.body.formule;
  const lieu = req.body.lieu;
  const programme = req.body.programme;

  const sql = `INSERT INTO Ateliers (nom, id_intervenant, debut, nb_participants, prix, contenu, formule, lieu, programme) VALUES ("${req.body.nom}", ${req.body.id_intervenant}, ${req.body.debut}, ${req.body.nb_participants}, ${req.body.prix}, "${req.body.contenu}", "${req.body.formule}", "${req.body.lieu}", "${req.body.programme}")`;

  connection.query(sql, (err, result) => {
    res.send((err === null)
      ? {
        flash: 'Atelier Ajouté !',
      }
      : {
        flash: error.message,
      });
  });
});

module.exports = router;
