import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

const Layout = () => {
    return (
        <Box className="bg-black" >
            <NavBar />
            <Outlet />
            <Footer />
        </Box >
    )
}

export default Layout