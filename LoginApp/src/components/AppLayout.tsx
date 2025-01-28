import { Outlet } from "react-router"
import NavBar from "./NavBar"
import HomePage from "./user/HomePage"
import { Grid2} from "@mui/material"

const AppLayout = () => {
    return (<>

        <Grid2 container spacing={2} style={{ height: "100vh" }}>
            <Grid2 size={3} style={{ backgroundColor: "#f5f5f5", padding: "16px" }}>
                <HomePage />
            </Grid2>
            <Grid2 size={6} style={{ backgroundColor: "#ffffff", padding: "16px",overflowY: "auto", height: "100%"  }}>
                <Outlet />
            </Grid2>
            <Grid2 size={3}>
                <NavBar />
            </Grid2>
        </Grid2>

    </>)
}

export default AppLayout