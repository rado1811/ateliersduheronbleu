import express from 'express';
import nodemailer from 'nodemailer';
import connection from '../config/db';

const router = express.Router();

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: 'wildphenix33@gmail.com',
    pass: 'heronbleu',
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

const sendMail = (res, from, to, subject, text) => {
  console.log(arguments);
  
  const mail = {
    from,
    to,
    subject,
    text,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json({
        msg: 'success',
      });
    }
  });
}

router.post('/admin', (req, res) => {
  connection.query('SELECT email FROM Intervenants WHERE id_intervenant=1', (errorMail, mailContact) => {
    if (errorMail) {
      console.error(errorMail);
      res.sendStatus(500);
    } else {
      let subject = '';
      let content = '';
      const idAtelier = req.body.id_atelier;
      if (idAtelier) {
        const idParticipant = req.body.id_participant;
        const sqlQuery = `SELECT p.nom, p.prenom, p.email, p.tel, a.nom_atelier FROM Participants p, Ateliers a WHERE p.id_participant = ${idParticipant} AND a.id_atelier = ${idAtelier}`;
        connection.query(sqlQuery, (error, results) => {
          if (error) {
            console.error(error);
            res.sendStatus(500);
          } else {
            const result = results[0];
            subject = 'Demande de Pré-inscription';
            content = `Bonjour,\n \nUn nouveau participant s'est pré-inscrit à l'atelier suivant : ${result.nom_atelier}.\n`
            + `\nVoici les coordonnées du participant :\nNom: ${result.nom} \nPrénom: ${result.prenom}`
            + `\nNuméro de téléphone: ${result.tel} \nEmail: ${result.email}\n `
            + '\nCe message provient d\'un envoi automatique de votre site internet, merci de ne pas y répondre';
            sendMail(res, result.nom, mailContact[0].email, subject, content);
          }
        });
      } else {
        const nom = req.body.nom;
        const mailAdresse = req.body.email;
        const prenom = req.body.prenom;
        const tel = req.body.tel;
        const message = req.body.message;
        subject = "Question d'un participant";
        content = 'Bonjour,\n \nUn futur participant vous a contacté.\n \nVoici ces coordonnées ainsi que son message:'
        + `\nNom: ${nom} \nPrenom: ${prenom} \nNuméro de téléphone: ${tel} \nEmail: ${mailAdresse} \nMessage: ${message}`
        + '\n\nCe message provient d\'un envoi automatique de votre site internet, merci de ne pas y répondre';
        sendMail(res, nom, mailContact[0].email, subject, content);
      }
    }
  });
});

router.post('/participant/:option', (req, res) => {
  const option = req.params.option;
  let subject = '';
  let content = '';

  const idAtelier = req.body.id_atelier;
  const idParticipant = req.body.id_participant;    
  const sqlQuery = `SELECT p.nom, p.prenom, p.email, p.tel, a.nom_atelier FROM Participants p, Ateliers a WHERE p.id_participant = ${idParticipant} AND a.id_atelier = ${idAtelier}`;
  connection.query(sqlQuery, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      const result = results[0];

      switch(option) {
        case "preresa": 
        subject = 'Confirmation pré-réservation';
        content = `Bonjour ${result.prenom} ${result.nom}. \n\nVotre pré-réservation est confirmée pour l'atelier ${result.nom_atelier}. \n\nCe message provient d'un envoi automatique, merci de ne pas y répondre`;
        break;

        case "confirme":
        subject = 'Confirmation de la réservation';
        content = `Bonjour ${result.prenom} ${result.nom}. \n\nVotre réservation est confirmée. \n\nCe message provient d'un envoi automatique, merci de ne pas y répondre`;
        break;

        case "annule":
        subject = 'Annulation de la réservation';
        content = `Bonjour ${result.prenom} ${result.nom}. \n\nVotre réservation est annulée. \n\nCe message provient d'un envoi automatique, merci de ne pas y répondre`;
        break;
      }
      sendMail(res, '', result.email, subject, content);
    }
  });
});

export default router;
