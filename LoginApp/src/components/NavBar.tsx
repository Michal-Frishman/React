import { Button} from "@mui/material";
import { Link } from "react-router";

const NavBar = () => {
    const color = 'rgb(143, 157, 168)'

    return (
        <>
            <nav style={{
                position: "fixed",
                top: "10px",
                right: "10px",
                display: "flex",
                borderRadius: "5px"
            }}>

                <Button component={Link} to='/recipes' style={{ color: "white", backgroundColor: color, marginRight: 9 }}  >
                    Recipes
                </Button>
                <Button component={Link} to='/home' sx={{ color: "white", backgroundColor: color }} >
                    Home
                </Button>
            </nav>
        </>
    );
}
export default NavBar
