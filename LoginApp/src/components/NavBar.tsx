import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router"

const NavBar = () => {
    // return (<>
    //     <nav>
    //         <Link to='/recipes'>Recipes</Link> 
    //         <br/>
    //         <Link to='/home'>Home</Link> 

    //     </nav>
    // </>)
    const theme = useTheme(); // קבלת הנושא

    return (
        <>
        <nav style={{
    position: "absolute",
    top: "25px",
    right: "10px",
    display: "flex",
    gap: '10px',
    backgroundColor: theme.palette.primary.main,
    padding: "8px 12px",
    marginRight: '3%',
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
}}>
                <Typography component={Link} to='/recipes' style={{ color: 'black' }}>
                    Recipes
                </Typography>
                <br />
                <Typography component={Link} to='/home' style={{ color: 'black' }}>
                    Home
                </Typography>
                </nav>        </>)
}

export default NavBar
