import React, { useEffect, useState } from 'react';
import { axiosGet } from '../../utils/functions';
import { variables } from '../../utils/variables';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import CountryGrid from './CountryGrid';
import NotFoundFlag from '../../assets/5ilwz1vxv50b1.png';
import PopulationChart  from './population/PopulationChart';
const CountryInfo = () => {
    const [countryInfo, setCountryInfo] = useState({});
    const [flags, setFlags] = useState(NotFoundFlag);
    const [borderCountries, setBorderCountries] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        const getCountryByCode = async (code) => {
            const response = await axiosGet(`${variables.url}/api/countries/${code}`);
            setCountryInfo(response);
        };

        getCountryByCode(title);
    }, [title]);

    useEffect(() => {
        const getFlags = async () => {
            try {
                const response = await axiosGet(`${variables.url}/api/countries/flags/all`);
                const flagData = response.data.find(flag => flag.iso2 === countryInfo.countryCode || flag.iso3 === countryInfo.countryCode);
                console.log(flagData);
                
                setFlags(flagData ? flagData.flag : NotFoundFlag);
            } catch (error) {
                console.log('Error fetching flags: ' + error);
            }
        };
        if (countryInfo.countryCode) {
            getFlags();
        }
    }, [countryInfo]);

    useEffect(() => {
        const getCountriesFlags = async () => {
            try {
                const response = await axiosGet(`${variables.url}/api/countries/flags/all`);
                const combinedData = countryInfo.borders.map(country => {
                    const flagData = response.data.find(flag => flag.iso2 === country.countryCode || flag.iso3 === country.countryCode);
                    return {
                        ...country,
                        flag: flagData ? flagData.flag : NotFoundFlag
                    };
                });
                setBorderCountries(combinedData || []);
            } catch (error) {
                console.log('Error fetching flags: ' + error);
            }
        };

        getCountriesFlags();
    }, [countryInfo]);

    return (
        <Box>
            {
                flags ?
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box component='img' src={flags} alt={`${countryInfo.commonName || 'Flag'}`} sx={{ width: '20vw', borderRight: '1.5px solid black', borderBottom: '1.5px solid black', padding: '1vw' }} />
                        <Box>
                            <Typography sx={{ fontSize: '4vw', borderBottom: '1px solid black' }}>{countryInfo.commonName}</Typography>
                            <Typography sx={{ color: 'grey' }}>{countryInfo.officialName}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1vw'}}>
                        <Typography sx={{ borderBottom: '1px solid black' }}>Country borders</Typography>
                        {
                            borderCountries.length > 0 ?
                            (
                                <CountryGrid countriesData={borderCountries} />
                            ) 
                            : 
                            (
                                <CircularProgress />
                            )
                        }
                    </Box>
                    <Box>
                        <Typography>Population chart</Typography>
                        <PopulationChart country={countryInfo.commonName} />
                    </Box>
                </Box>
                :
                <CircularProgress/>
            }
        </Box>
    );
}

export default CountryInfo;
