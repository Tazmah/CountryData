import { ArrowBack } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"
import { fetchFromApi } from './utils/fetchFromApi'
import DynamicData from "./DynamicData";
import { useTheme } from '@mui/material/styles';


const SpecificCountry = () => {
    const [countryInfo, setCountryInfo] = useState([])
    const { id } = useParams();
    const theme = useTheme()

    const getData = async () => {
        const data = await fetchFromApi(`name/${id}`)
        setCountryInfo(data)
    }

    useMemo(() => {
        getData()
    }, [])

    return (
        <Box sx={{
            background: theme.palette.primary.main,
            p: 4,
            minHeight: "92vh"
        }}>

            <Link to={"/"}>
                <Button variant="contained" sx={{
                    color: theme.palette.primary.main,
                    background: theme.palette.text.main,
                    display: "flex",
                    gap: 2,
                    marginBottom: "15px",
                    ":hover": {
                        bgcolor: "hsl(209, 20%, 18%)",
                        color: "white"
                    }
                }}
                >
                    <ArrowBack />
                    Back
                </Button>
            </Link>
            <DynamicData countryInfo={countryInfo} />
        </Box>
    )
}

export default SpecificCountry