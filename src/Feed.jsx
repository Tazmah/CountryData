import { Box } from '@mui/material'
import Explore from './Explore'
import Countries from './Countries'
import { useEffect, useState } from 'react'
import { fetchFromApi } from './utils/fetchFromApi'

const Feed = () => {
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const getData = async () => {
        const data = await fetchFromApi("all")
        setCountries(data)
    }

    useEffect(() => {
        getData()
    }, [countries])

    return (
        <Box
            sx={{
                background: "hsl(207, 26%, 17%)",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}
            p={4}

        >
            <Explore searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Countries countries={countries} setCountries={setCountries} />
        </Box>
    )
}

export default Feed