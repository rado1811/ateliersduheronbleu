import express from 'express';
import connection from '../../config/db';

const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// bcrypt

router.post('/signup', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const select = `INSERT INTO Utilisateurs2 (email, password, prenom, nom) VALUES 
   ('${req.body.email}', '${hash}', '${req.body.prenom}','${req.body.nom}');`;
  connection.query(select, (err) => {
    if (err) {
      res.status(500).json({
        flash: err.message,
      });
    } else {
      res.status(200).json({
        flash: 'Nouvel utilisateur enregistré !',
      });
      res.end();
    }
  });
});

router.post('/signin', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.log("erreur", err);
      
      return res.status(500).send(`${err} dans auth/signin`);
    }
    if (!user) {
      console.log("no user");
      
      return res
        .status(401)
        .json({ flash: "Erreur de Mot de Passe ou d'adresse mail" });
    }



    const token = jwt.sign(user, 'N4bit3');
    console.log("ok...", user, token)
    return res.json({ user, token, flash: 'Connexion validée' });
  })(req, res);
});

module.exports = router;
