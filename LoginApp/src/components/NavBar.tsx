import { Button } from "@mui/material";
import { Link } from "react-router";

const NavBar = () => {
    const color = 'rgb(143, 157, 168)'

    return (
        <>
            <nav style={{
                position: "fixed",
                top: "10px", /* התאמה לגובה של Toolbar */
                right: "10px",
                display: "flex",
                borderRadius: "5px"
        
            }}>
                <Button component={Link} to='/recipes' variant="contained" sx={{ color: "white", backgroundColor: color, marginRight: 1, padding: "8px"        , '&:hover': {
            color: "white" // צבע במצב ריחוף
        }}}  >
                   Show all recipes
                </Button>
                <Button component={Link} to='/home' variant="contained" sx={{ color: "white", backgroundColor: color, marginRight: 1, padding: "8px"        , '&:hover': {
            color: "white" // צבע במצב ריחוף
        }}} >
                    Home
                </Button>
                <Button component={Link} to='/about' variant="contained" sx={{ color: "white", backgroundColor: color, padding: "8px" ,        '&:hover': {
            color: "white" // צבע במצב ריחוף
        }}} >
                    About
                </Button>
            </nav>
        </>
    );
}
export default NavBar
