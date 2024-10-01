import express from 'express';
import { getCountryPopulationController } from '../../../controller/countries/population/populationController.js';

const populationRouter = express.Router();

populationRouter.get('/countries/population/all', getCountryPopulationController);

export default populationRouter;
