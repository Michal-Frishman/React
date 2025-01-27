import { Link } from "react-router"

const NavBar = () => {

    return (<>
        <nav>
            <Link to='/'>Home</Link> | 
            <Link to='/about'>About</Link> | 
        </nav>
    </>)
}

export default NavBar