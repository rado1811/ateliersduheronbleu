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

router.post('/', upload.single('file'), (req, res) => {
  const form = JSON.parse(req.body.form);
  const body = {
    ...form,
    photo_atelier: req.file.filename,
  };

  connection.query('INSERT INTO Ateliers SET ?', body, (errSql) => {
    if (errSql) {
      console.error(errSql);
      res.send(errSql);
    } else {
      res.sendStatus(200);
    }
  });
});
router.put('/', upload.single('file'), (req, res) => {
  const formulaire = JSON.parse(req.body.form);
  const body = {
    ...formulaire,
    photo_atelier: req.file.filename,
  };
  connection.query(`UPDATE Ateliers SET ? WHERE id_atelier =${
    formulaire.id_atelier
  }`, body, (errSql) => {
    if (errSql) {
      console.error(errSql);
      res.send(errSql);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/', (req, res) => {
  connection.query('DELETE FROM Ateliers WHERE id_atelier = ?', [req.body.id_atelier], (err, result) => {
    if (err) {
      res.status(500).end();
    } else {
      res.end('atelier supprimé');
    }
  });
});

export default router;
