import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express',
  });
});

let selectQuery = 'SELECT * FROM ateliers';
//sur get lancement de la requête sql sur index
router.get('/ateliers', (req, res, next) => {
  sqlConnexion.query(selectQuery, function(err, rows) {
    if (err)
      throw err;
    let ateliers = rows[0];
    res.render('index', {
      ateliers
    }); //envoi du rendu de la vue et de la variable contenant les données joueurs et staff
  });
})


export default router;
