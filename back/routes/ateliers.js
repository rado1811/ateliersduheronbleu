import express from 'express';
import multer from 'multer';
import connection from '../config/db';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../front/public/images/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });


router.get('/', (req, res) => {
  connection.query('SELECT * FROM Ateliers', (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

<<<<<<< HEAD
router.post('/', upload.single('file'), (req, res) => {
  const form = JSON.parse(req.body.form);
  const body = {
    ...form,
    photo: req.file.filename,
  };

  connection.query('INSERT INTO Ateliers SET ?', body, (errSql) => {
    if (errSql) {
      console.error(errSql);
      res.send(errSql);
    } else {
      res.sendStatus(200);
=======
router.post('/', (req, res) => {
  connection.query('INSERT INTO Ateliers SET ?', req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send();
    }
  });
});

router.put('/', (req, res) => {
  const sql = `UPDATE Ateliers SET ? WHERE id_atelier =${
    req.body.data.id_atelier
  }`;
  connection.query(sql, req.body.data, (err) => {
    if (err) res.send(err);
    else {
      res.status(200).send();
>>>>>>> dev
    }
  });
});

<<<<<<< HEAD
router.delete('/:id', (req, res) => {
  const deleted = `DELETE FROM Ateliers WHERE id=${req.params.id}`;
  connection.query(deleted, (err, rows) => {
    if (err) {
      throw err;
=======
router.delete('/', (req, res) => {
  connection.query('DELETE FROM Ateliers WHERE id_atelier = ?', [req.body.id_atelier], (err, result) => {
    if (err) {
      res.status(500).end();
    } else {
      res.end('atelier supprimé');
>>>>>>> dev
    }
  });
});

export default router;
