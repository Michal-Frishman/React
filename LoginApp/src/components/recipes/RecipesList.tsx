import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes, RecipeType } from "./RecipesSlice"
import { AppDispatch, RootStore } from "./RecipesStore";
import { useContext, useEffect, useState } from "react";
import AddRecipe from "./AddRecipe";
import { Link, Outlet } from "react-router";
import { userContext } from "../../App";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";

export default () => {
    const [user, dispatchUser] = useContext(userContext);
    const [addRecipes, setAddRecipes] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);
    return (
        <>
            <Grid container spacing={3} >
                <Grid
                    item
                    xs={3}
                    style={{
                        position: 'fixed',
                        top: 75,
                        right: 0,
                        height: 'calc(100vh - 72px)',
                        overflowY: 'auto',
                        paddingRight: '20px',
                        zIndex: 1,
                        borderLeft: '1px solid #ddd',
                        paddingTop: 0
                    }}

                >
                    <Box sx={{ backgroundColor: "rgb(143, 157, 168)", p: 2, borderRadius: 1,position:"sticky",top:0,zIndex:222 }}>
                        <Typography variant="h4" color="white">
                    Recipes                    </Typography>
                    </Box>
                    {recipesList.map((r: RecipeType, index: number) => (
                        <ListItem key={r.id ?? index} sx={{ marginBottom: "15px" }}>
                            <Link to={`/recipes/${r.id}`} style={{
                                textDecoration: "none",
                                color: "inherit",
                                display: "flex",
                                alignItems: "center"
                            }}>📃 {r.title}</Link>
                        </ListItem>
                    ))}
                    {user.id && <Box sx={{ position: "sticky", bottom: 10, backgroundColor: "rgb(143, 157, 168)", padding: "10px", textAlign: "center" }}>
                        <Link to="/addRecipe" style={{ color: "black" }} > Add a recipe</Link>
                    </Box>}
                </Grid>
                <Grid
                    item
                    xs={9}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        maxWidth: '80%',
                        position: 'relative',
                        zIndex: 0
                    }}>
                    <Outlet />
                </Grid>
            </Grid>
        </>)
}