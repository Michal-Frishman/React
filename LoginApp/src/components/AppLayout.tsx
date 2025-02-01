// import { Outlet } from "react-router";
// import NavBar from "./NavBar";
// import Login from "./user/Login";


// const AppLayout = () => {
//     return (
//         <>
//             <Login />
//             <NavBar />
//             <Outlet />
//         </>
//     )
// };

// export default AppLayout;
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Login from "./user/Login";
import { Toolbar } from "@mui/material";

const AppLayout = () => {
    return (
        <>
            <Toolbar sx={{
                position: "fixed",
                top: "25px",
                left: "10px",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "flex-start", gap: "115px",
            }}>
                <Login />
            </Toolbar>
            <NavBar />
            <Outlet /></>
    );
};
export default AppLayout;
