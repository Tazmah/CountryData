import { Search } from '@mui/icons-material'
import { FormControl, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material'
import React from 'react'
import { fetchFromApi } from './utils/fetchFromApi'
import { useNavigate } from 'react-router-dom'

const Explore = ({ searchTerm, setSearchTerm, select, setSelect }) => {

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        if (searchTerm) {
            navigate(`search/${searchTerm}`)
            setSearchTerm("")
        }
    }

    return (
        <Stack sx={{
            display: "flex",
            flexDirection: { sx: "column", md: "row" },
            gap: "20px",
            justifyContent: "space-between"
        }}>
            <Paper

                component="form"
                onSubmit={submit}
                sx={{
                    gap: 1,
                    borderRadius: 2,
                    border: "none",
                    outline: "none",
                    p: 1,
                    boxShadow: "none",
                    alignItems: "center",
                    display: "flex",
                    width: { xs: "100%", md: "400px" }
                }}

            >
                <Search />
                <input style={{ width: "100%" }}
                    className='search-bar'
                    placeholder='Search For A Country....'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />

            </Paper>
            <FormControl sx={{
                width: { xs: "70%", md: "200px" },
                background: "#fff",
                borderRadius: 2,
                border: "none",
                outline: "none",
            }}>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                        border: "none",
                        outline: "none",
                    }}
                >
                    Filter By Region
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    label="Filter By Region"
                    onChange={((e) => {
                        setSelect(e.target.value)
                    })}
                >
                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="America">America</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="Oceania">Oceania</MenuItem>
                </Select>
            </FormControl>

        </Stack>
    )
}

export default Explore