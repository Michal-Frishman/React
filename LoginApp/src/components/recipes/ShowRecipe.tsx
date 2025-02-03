import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootStore } from "./RecipesStore";
import { RecipeType } from "./RecipesSlice";
import { Box, Card, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../App";

const ShowRecipe = () => {
    const { id } = useParams();
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes);
    let recipe: RecipeType | undefined;
    if (id) {
        recipe = recipesList.find(r => r.id === parseInt(id));
    }

    return (
    <>
            <Box sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", mt: 8.5, mr: 2 }}>
                <Card sx={{ width: 800, borderRadius: 2, overflow: 'auto' }}>
                    <Box sx={{ backgroundColor: "rgb(143, 157, 168)", p: 2 }}>
                        <Typography variant="h4" color="white">
                            {recipe?.title}
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "rgb(143, 157, 168)", p: 1, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Description:
                        </Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        {recipe?.description}
                    </Typography>
                    <Box sx={{ backgroundColor: "rgb(143, 157, 168)", p: 1, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Ingredients:
                        </Typography>
                    </Box>
                    <List>
                        {recipe?.ingredients?.map((ingredient, index) => (
                            <ListItem key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography>🥣 {ingredient}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ backgroundColor: "rgb(143, 157, 168)", p: 1, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Instructions:
                        </Typography>
                    </Box>
                    <Typography sx={{ mt: 1 }}>
                        {recipe?.instructions}
                    </Typography>
                </Card>
            </Box>
    
    </>
            )
        
        
    
}
export default ShowRecipe;
