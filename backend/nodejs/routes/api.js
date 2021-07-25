import express from 'express';
const router = express.Router();

import todoRouter from './api/todo.js';

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend API' });
});
router.use('/todo', todoRouter);

export default router;