import { Button } from "@mui/material";
import { Link } from "react-router";
import { buttonStyle } from "../App";
const style = {
    color: "rgb(215, 155, 154)",
    // backgroundColor: "white",
    margin: 2,
    padding: "8px",
    '&:hover': {
      color: "white"
    }
  }
const NavBar = () => {
     return (
        <>
            <nav style={{
                position: "fixed",
                top: "10px", 
                right: "10px",
            }}>
                <Link to='/recipes' style={style}  >
                    Recipes
                </Link>
                <Link to='/home' style={style}  >
                Home
                </Link>   <Link to='/about'  style={style}  >
                About
                </Link>
              
            
            </nav>
        </>
    );
}
export default NavBar
