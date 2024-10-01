import { getAllCountriesService, getACountryByCodeService } from "../../services/countries/countriesService.js";

export const getAllCountriesController = async (req, res) => {
    try {
      const countries = await getAllCountriesService()
      res.status(200).json(countries);
    } catch (error) {
      console.error('Error fetching countries:', error);
      res.status(500).json({ message: 'Error fetching countries' });
    }
  };

export const getCountryByCodeController = async (req, res) => {
    const { code } = req.params;

    try {
        const countryData = await getACountryByCodeService(code);
        res.status(200).json(countryData);
    } catch (error) {
        console.error('Error fetching country data:', error);
        res.status(500).json({ message: 'Error fetching country data' });
    }
};