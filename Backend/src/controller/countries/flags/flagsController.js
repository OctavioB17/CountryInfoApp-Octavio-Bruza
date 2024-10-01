import { getFlagsService } from "../../../services/countries/flags/flagsService.js";

export const getFlagsController = async (req, res) => {
    try {
      const response = await getFlagsService();
      res.status(200).json(response);
    } catch (error) {
      console.error('Error fetching flags:', error);
      res.status(500).json({ message: 'Error fetching flags' });
    }
  };