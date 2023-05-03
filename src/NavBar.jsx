import React from 'react'
import { Paper, Stack, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { DarkMode } from '@mui/icons-material'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { useTheme } from '@mui/material/styles';


const NavBar = () => {
    const theme = useTheme();
    console.log(theme);
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <Stack
            sx={{
                // background: "hsl(209, 23%, 22%)"
                background: theme.palette.nav.main,
                borderBottom: "1px solid #000"
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={4}
        >
            <Link
                to="/"
            >
                <Typography variant='h5' sx={{
                    color: theme.palette.text.main
                }}>
                    Where in the world?
                </Typography>
            </Link>
            <Paper className='mode' sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#fff",
                boxShadow: "none",
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer"
            }}>
                <Button onClick={toggleTheme} sx={{
                    color: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    background: theme.palette.text.main,
                    ":hover": {
                        bgcolor: theme.palette.text.main,
                    }
                }}>
                    <DarkMode
                    />
                    DarkMode
                </Button>
            </Paper>
        </Stack>
    )
}

export default NavBar