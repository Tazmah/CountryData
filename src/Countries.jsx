import { Stack } from '@mui/material'
import React from 'react'
import Country from './Country'

const Countries = ({ countries, setcountries, searchTerm, select }) => {
    return (
        <Stack
            justifyContent="space-between"
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr ", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                gap: "30px"

            }}
        >


            {countries.filter((item) => {
                // Filter by search term
                const searchMatch = searchTerm.toLowerCase() === ""
                    ? true
                    : item.name.common.toLowerCase().includes(searchTerm.toLowerCase());

                // Filter by continent
                const continentMatch = select === ""
                    ? true
                    : item.region === select;

                // Return whether both conditions are true
                return searchMatch && continentMatch;
            }).map((item, i) => (
                <div key={i}>
                    <Country item={item} />
                </div>
            ))}
        </Stack>
    )
}
// || select.toLowerCase() === "" ? item.continents[0].toLowerCase().includes(select.toLowerCase())
export default Countries