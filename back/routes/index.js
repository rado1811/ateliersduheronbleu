
let selectQuery = 'SELECT * FROM ateliers';
router.get('/ateliers', (req, res, next) => {
  sqlConnexion.query(selectQuery, function(err, rows) {
    if (err)
      throw err;
    let ateliers = rows[0];
    res.render('index', {
      ateliers
    }); 
  });
})


export default router;
