import Axios from 'axios'
export const getFlagsService = async () =>
    {
        const response = await Axios.get(`${process.env.API_COUNTRIES_NOW}/api/v0.1/countries/flag/images`)
        return response.data
    }