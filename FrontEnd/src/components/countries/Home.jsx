import React, { useEffect, useState } from 'react';
import { axiosGet } from '../../utils/functions';
import { variables } from '../../utils/variables';
import { Box, Divider, Grid2, Typography } from '@mui/material';
import NormalBox from '../reusable/NormalBox';
import { Link } from 'react-router-dom';
import CountryGrid from './CountryGrid';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await axiosGet(`${variables.url}/api/countries/all`);
                setCountries(response);
            } catch (error) {
                console.log('Error fetching countries: ' + error);
            }
        };

        const getFlags = async () => {
            try {
                const response = await axiosGet(`${variables.url}/api/countries/flags/all`);
                setFlags(response.data);
            } catch (error) {
                console.log('Error fetching flags: ' + error);
            }
        };

        getCountries();
        getFlags();
    }, []);

    const combinedData = countries.map(country => {
        const flagData = flags.find(flag => flag.iso2 === country.countryCode || flag.iso3 === country.countryCode);
        return {
            ...country,
            flag: flagData ? flagData.flag : null
        };
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            {combinedData ? <CountryGrid countriesData={combinedData} /> : <CircularProgress />}
        </Box>
    );
};

export default Home;
