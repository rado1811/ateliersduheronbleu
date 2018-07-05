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

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM Intervenants', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

router.post('/', upload.single('file'), (req, res) => {
  const form = JSON.parse(req.body.form);
  const body = {
    ...form,
    photo: req.file.filename,
  };

  connection.query('INSERT INTO Intervenants SET ?', body, (errSql) => {
    if (errSql) {
      console.error(errSql);
      res.send(errSql);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const deletedIntervenant = `DELETE FROM Intervenants WHERE id=${
    req.params.id
  }`;
  connection.query(deletedIntervenant, function(err, rows) {
    if (err) throw err;
  });
});

export default router;
