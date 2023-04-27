
import { ArrowBack } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"
import { fetchFromApi } from './utils/fetchFromApi'
import DynamicData from "./DynamicData";


const SpecificCountry = () => {
    const [countryInfo, setCountryInfo] = useState([])
    const { id } = useParams();


    const getData = async () => {
        const data = await fetchFromApi(`name/${id}`)
        setCountryInfo(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box sx={{
            p: 4,
        }}>

            <Button variant="contained" sx={{
                background: "hsl(209, 23%, 22%)",
                display: "flex",
                gap: 2,
                marginBottom: "15px"
            }}


            >
                <ArrowBack />
                Back
            </Button>
            <DynamicData countryInfo={countryInfo} />
        </Box>
    )
}

export default SpecificCountry