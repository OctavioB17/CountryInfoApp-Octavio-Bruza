import express from 'express';
import { getAllCountriesController, getCountryByCodeController } from '../../controller/countries/countriesController.js';

const countriesRouter = express.Router();

countriesRouter.get('/countries/all', getAllCountriesController);

countriesRouter.get('/countries/:code', getCountryByCodeController);


export default countriesRouter;