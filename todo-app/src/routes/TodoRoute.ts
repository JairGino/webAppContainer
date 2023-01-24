import express, { Router } from 'express';
import TodoController from '../controllers/TodoController';

const router = Router();
const todoController = new TodoController();

router.get('/', todoController.get);

export default router;
