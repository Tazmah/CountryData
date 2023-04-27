import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Country from './Country'
import { fetchFromApi } from './utils/fetchFromApi'
import { useState, useEffect } from 'react'

const Countries = ({ countries, setcountries }) => {
    return (
        <Stack
            justifyContent="space-between"
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr ", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                gap: "30px"

            }}
        >

            {countries.map((item, i) => (
                <div key={i}>
                    <Country item={item} />
                </div>
            ))}
        </Stack>
    )
}

export default Countries