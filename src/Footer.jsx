import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            background: theme.palette.nav.main,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px"
        }}>
            <Link to="https://youtube.com/@HamzaCodes">
                <Typography variant="h6" sx={{
                    color: theme.palette.text.main
                }}>
                    Made With Love By Hamza Codes
                </Typography>
            </Link>
            <Link to="https://www.frontendmentor.io/">
                <Typography variant="h6" sx={{
                    color: theme.palette.text.main
                }}>
                    Frontend Mentor Challenge
                </Typography>
            </Link>
        </Box>
    )
}

export default Footer
