import React from 'react';
import { Box, Grid2 } from '@mui/material';
import CountryCard from './CountryCard';

const CountryGrid = ({ countriesData }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: '1vw'}}>
            <Grid2 container spacing={3}>
                {countriesData.map((countriesData) => (
                    <Grid2 item xs={12} sm={6} md={4} key={countriesData.name}>
                        <CountryCard countryCode={countriesData.countryCode} name={countriesData.name || countriesData.commonName} flag={countriesData.flag}/>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default CountryGrid;