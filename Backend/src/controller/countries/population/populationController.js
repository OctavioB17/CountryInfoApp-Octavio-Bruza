import { getCountryPopulationService } from "../../../services/countries/population/populationService.js";

export const getCountryPopulationController = async (req, res) => {
    try {
        const response = await getCountryPopulationService();
        return res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching country population:', error);
        return res.status(500).json({ message: 'Error fetching country population' });
    }
};