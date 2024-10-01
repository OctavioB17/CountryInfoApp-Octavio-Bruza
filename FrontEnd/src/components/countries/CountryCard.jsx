import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NormalBox from '../reusable/NormalBox'; 
import NotFoundFlag from '../../assets/5ilwz1vxv50b1.png';

const CountryCard = ({ countryCode, name, flag }) => {
    return (
        <Link style={{color: 'black'}} to={`/country/${countryCode}`}>
            <NormalBox sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '8vw' }}>
                <Box component='img' src={flag ? flag : NotFoundFlag} alt={`${name} flag`}  sx={{ width: '5vw', height: '3vw', borderBottom: '1px solid black', padding: '0.5vw' }} />
                <Typography>{name}</Typography>
            </NormalBox>
        </Link>
    );
};

export default CountryCard;
