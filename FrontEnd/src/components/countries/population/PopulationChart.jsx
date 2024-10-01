import React, { useEffect, useState } from 'react'; 
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { axiosGet } from '../../../utils/functions.js';
import { variables } from '../../../utils/variables.js';
import { Box, CircularProgress } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PopulationChart = ({ country }) => {
    const [populationData, setPopulationData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(country)
    useEffect(() => {
        const fetchPopulationData = async () => {
            try {
                const response = await axiosGet(`${variables.url}/api/countries/population/all`);
                console.log(response)
                const countryData = response.find(item => item.country === country);
                if (countryData) {
                    setPopulationData(countryData.populationCounts);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching population data:', error);
                setLoading(false);
            }
        };

        fetchPopulationData();
    }, [country]);

    console.log(populationData)
    const chartData = {
        labels: populationData.map(entry => entry.year),
        datasets: [
            {
                label: 'Population',
                data: populationData.map(entry => entry.value),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <Box sx={{borderTop: '1px solid black'}}>
                <Line data={chartData} />
                </Box>
            )}
        </div>
    );
};

export default PopulationChart;
