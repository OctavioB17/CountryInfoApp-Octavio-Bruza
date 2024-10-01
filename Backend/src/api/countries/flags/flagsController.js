import express from 'express';
import { getFlagsController } from '../../../controller/countries/flags/flagsController.js';

const flagsRouter = express.Router();

flagsRouter.get('/countries/flags/all', getFlagsController);

export default flagsRouter;
