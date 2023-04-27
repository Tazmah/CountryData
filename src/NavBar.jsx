import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { DarkMode } from '@mui/icons-material'

const NavBar = () => {
    return (
        <Stack
            sx={{
                background: "hsl(209, 23%, 22%)"
            }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={2}
            px={4}
        >
            <Typography variant='h5'>
                <Link
                    to="/"
                >
                    Where in the world?
                </Link>
            </Typography>
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
                <DarkMode
                    sx={{
                        color: "#fff"
                    }}
                />
                DarkMode
            </Paper>
        </Stack>
    )
}

export default NavBar