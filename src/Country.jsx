import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const Country = ({ item: { name: { common }, capital, region, population, flags: { svg } } }) => {

    const theme = useTheme()
    return (
        <Card>
            <Link to={`/country/${common}`}>
                <CardMedia
                    sx={{
                        background: theme.palette.primary.main,
                        height: 140,
                        border: "none",
                        outline: "none",
                        // objectFit: "fill"
                    }}

                >
                    <img
                        src={svg}
                        alt=""
                        title={common}
                        width="100%"
                        style={{
                            background: theme.palette.text.main,
                        }}
                    />
                </CardMedia>

            </Link>
            <CardContent
                sx={{
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                }}
            >
                <Link to={`/country/${common}`}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        color: theme.palette.text.main,
                    }}>
                        {common}
                    </Typography>
                </Link>
                <Typography variant="body2" sx={{
                    color: theme.palette.text.main,
                }}>
                    Population: {population}
                </Typography>
                <Typography variant="body2" sx={{
                    color: theme.palette.text.main,
                }}>
                    Region: {region}
                </Typography>
                <Typography variant="body2" sx={{
                    color: theme.palette.text.main,
                }}>
                    Capital: {capital}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default Country