import Axios from 'axios'
export const getCountryPopulationService = async () =>
    {
        const response = await Axios.get(`${process.env.API_COUNTRIES_NOW}/api/v0.1/countries/population`);
        return response.data
    }
    