import express from 'express';
import nodemailer from 'nodemailer';

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

router.post('/', (req, res) => {
  const nom = req.body.nom;
  const mailAdresse = req.body.email;
  const prenom = req.body.prenom;
  const tel = req.body.tel;
  let content = '';
  let objet = '';

  if (req.body.message) {
    const message = req.body.message;
    content = `Bonjour,\n \nUn futur participant vous a contacté.\n \nVoici ces coordonnées ainsi que son message: \nNom: ${nom} \nPrenom: ${prenom} \nNuméro de téléphone: ${tel} \nEmail: ${mailAdresse} \nMessage: ${message} \n\nCe message provient d'un envoi automatique de votre site internet, merci de ne pas y répondre`;
    objet = "Question d'un participant";
  }
  if (req.body.atelier) {
    const atelier = req.body.id_atelier[0].nom;
    content = `Bonjour,\n \nUn nouveau participant s'est pré-inscrit à l'atelier suivant : ${atelier}.\n \nVoici les coordonnées du participant :\nNom: ${nom} \nPrénom: ${prenom} \nNuméro de téléphone: ${tel} \nEmail: ${mailAdresse}\n \nCe message provient d'un envoi automatique de votre site internet, merci de ne pas y répondre`;
    objet = 'Demande de Pré-inscription';
  }
  const mail = {
    from: nom,
    to: 'thibaut.cointet@gmail.com',
    subject: objet,
    text: content,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        msg: 'fail',
      });
    } else {
      res.json({
        msg: 'success',
      });
    }
  });
});

export default router;
