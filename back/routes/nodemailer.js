import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: 'wildphenix33@gmail.com',
    pass: 'heronbleu',
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
    content = `Bonjour,\n \n Vous avez reçu un nouveau message.\n nom: ${nom} \n prenom: ${prenom} \n numéro de téléphone: ${tel} \n email: ${mailAdresse} \n \n message: ${message} \n \n Ce message provient de votre site internet`;
    objet = "Question d'un participant";
  }
  if (req.body.atelier) {
    const atelier = req.body.id_atelier[0].nom;
    content = `Bonjour,\n \n Un nouveau participant s'est pré-inscrit à l'atelier ${atelier}.\n nom: ${nom} \n prenom: ${prenom} \n numéro de téléphone: ${tel} \n email: ${mailAdresse} \n \n Ce message provient de votre site internet`;
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
