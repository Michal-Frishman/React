import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router";

const NavBar = () => {
    const theme = useTheme();

    return (
        <>
        <nav style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            display: "flex",
            gap: '10px',
            backgroundColor: theme.palette.primary.main,
            padding: "8px 12px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            zIndex: 1000
        }}>
                <Typography component={Link} to='/recipes' style={{ color: 'black' }}>
                    Recipes
                </Typography>
                <Typography component={Link} to='/home' style={{ color: 'black' }}>
                    Home
                </Typography>
        </nav>
        </>
    );
}
export default NavBar
