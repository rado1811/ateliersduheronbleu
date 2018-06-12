import express from 'express';
import connexion from '../config/db';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
