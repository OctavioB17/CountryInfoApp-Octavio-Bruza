import Axios from 'axios'

export const getAllCountriesService = async () => 
{
    const response = await Axios.get(`${process.env.API_DATE_NAGER}/api/v3/AvailableCountries`)
    return response.data
}

export const getACountryByCodeService = async (countryCode) => 
{
    const response = await Axios.get(`${process.env.API_DATE_NAGER}/api/v3/CountryInfo/${countryCode}`);
    return response.data
}  
