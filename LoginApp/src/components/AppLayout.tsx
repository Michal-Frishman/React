import { Outlet, useLocation } from "react-router";
import { Link } from "react-router";
import NavBar from "./NavBar";
import Login from "./user/Login";
import HomePage from "./HomePage";
import { Box, Typography } from "@mui/material";

const AppLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <Box sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
        }}>
            <Box sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: -1,
                overflow: "hidden",
                filter: "brightness(0.8)"
            }}>
                <HomePage />
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                boxSizing: "border-box"
            }}>
                <Login />
                <NavBar />
            </Box>

            {isHome && (
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center"
                }}>
                    <Typography variant="h4" color="primary">
                        ברוכים הבאים לאתר המתכונים
                    </Typography>
                    <Box sx={{ marginTop: "20px" }}>
                        <Link to="/recipes" style={{
                            textDecoration: "none",
                            backgroundColor: "#3f51b5",
                            color: "white",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            display: "inline-block"
                        }}>
                            הצגת המתכונים
                        </Link>
                    </Box>
                </Box>
            )}

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                padding: "10px",
                boxSizing: "border-box",
                width: "100vw",
                height: "100vh",
                overflow: "hidden"
            }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AppLayout;
