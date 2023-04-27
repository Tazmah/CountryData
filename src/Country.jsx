import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Country = ({ item: { name: { common }, capital, region, population, flags: { svg } } }) => {


    return (
        <Card>
            <Link to={`/country/${common}`}>
                <CardMedia
                    sx={{
                        background: "hsl(209, 23%, 22%)",
                        height: 140,
                        border: "none",
                        outline: "none",
                        objectFit: "fill"
                    }}

                >
                    <img
                        src={svg}
                        alt=""
                        title={common}
                    />
                </CardMedia>

            </Link>
            <CardContent
                sx={{
                    background: "hsl(209, 23%, 22%)",
                    color: "#fff"
                }}
            >
                <Link to={`/country/${common}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {common}
                    </Typography>
                </Link>
                <Typography variant="body2" >
                    Population: {population}
                </Typography>
                <Typography variant="body2" >
                    Region: {region}
                </Typography>
                <Typography variant="body2" >
                    Capital: {capital}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default Country