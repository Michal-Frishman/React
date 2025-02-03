import { Link } from "react-router";
const style = {
    color: "white",
    backgroundColor: "rgb(215, 155, 154)",
    margin: 2,
    padding: "8px",
    borderRadius: 5,
    '&:hover': {
        color: "white"
    }
}
const NavBar = () => {
    return (
        <>
            <nav style={{
                position: "fixed",
                top: "30px",
                right: "10px",

            }}>
                <Link to='/recipes' style={style}  >
                    Recipes
                </Link>
                <Link to='/home' style={style}  >
                    Home
                </Link>   <Link to='/about' style={style}  >
                    About
                </Link>
            </nav>
        </>
    );
}
export default NavBar
