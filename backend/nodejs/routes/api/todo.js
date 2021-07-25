import express from 'express';
const router = express.Router();

import { getTodo, insertTodo } from '../../controllers/todo.controller.js';
// import TodoModel from '../../models/todo.model.js';

router
    .route('/')
    .get(getTodo)
    .post(insertTodo);

router
    .route('/:id')
    .get(getTodo)
    .delete(function(req, res) {});

export default router;