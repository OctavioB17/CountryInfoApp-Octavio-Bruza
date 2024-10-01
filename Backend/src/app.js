import express from 'express'
import cors from 'cors';  
import dotenv from 'dotenv';
import countriesRouter from './api/countries/countriesApi.js';
import flagsRouter from './api/countries/flags/flagsController.js';
import populationRouter from './api/countries/population/populationApi.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', countriesRouter);
app.use('/api', flagsRouter);
app.use('/api', populationRouter);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});