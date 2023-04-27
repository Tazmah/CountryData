import { Box, Button, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'

const DynamicData = ({ countryInfo }) => {

    const sortedData = useMemo(() => {
        return countryInfo;
    }, [countryInfo]);

    if (!sortedData[0]) {
        return null;
    }

    const { name: { common, nativename }, population, region, subregion, capital, currencies, languages, flags: { svg }, tld, borders } = sortedData[0]
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: { sx: "column", md: "row" },
            justifyContent: "space-between",
            gap: "50px"
        }}>
            <CardMedia
                sx={{
                    width: "100%",
                    height: "300px",
                }}
                image={svg}
                title={common}
                alt="flag"
            />
            <CardContent
                sx={{
                    color: "#fff",
                    width: "100%"
                }}
            >

                <Typography gutterBottom variant="h3" component="div">
                    {common}
                </Typography>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: { sx: "column", md: "row" },
                        gap: "5px",
                        justifyContent: "space-between"
                    }}
                >
                    <Box sx={{ width: "100%" }}>
                        <Typography variant="h6" >
                            Native Name: {common}
                        </Typography>
                        <Typography variant="h6" >
                            Population: {population}
                        </Typography>
                        <Typography variant="h6" >
                            Region: {region}
                        </Typography>
                        <Typography variant="h6" >
                            Sub Region: {subregion}
                        </Typography>
                        <Typography variant="h6" >
                            Capital: {capital}
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Typography variant="h6" >
                            Top Level Domain: {tld[0]}
                        </Typography>
                        {/* <Typography variant="h6" >
                            Currencies:
                        </Typography>
                        <Typography variant="h6" >
                            Languages:
                        </Typography> */}
                    </Box>
                </Stack>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    gap: "20px",
                    marginTop: "30px",
                }}>

                    <Box sx={{
                        display: "flex",
                        flexDirection: { sx: "column", md: "row" },
                        gap: "15px"
                    }}>
                        {borders && <Typography variant="h6" >
                            Border Countries:
                        </Typography>}
                        {borders && borders.map((border) => (
                            <Button variant="contained" sx={{
                                background: "hsl(209, 23%, 22%)",
                                display: "flex",
                                gap: 2,
                                marginBottom: "15px"
                            }}>
                                {border}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Stack>
    )
}

export default DynamicData