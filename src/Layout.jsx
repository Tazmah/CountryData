import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

const Layout = () => {
    return (
        <Box className="bg-black" >
            <NavBar />
            <Outlet />
        </Box >
    )
}

export default Layout