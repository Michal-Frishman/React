import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootStore } from "./RecipesStore";
import { RecipeType } from "./RecipesSlice";
import { Box, Card, List, ListItem, Typography } from "@mui/material";
const ShowRecipe = () => {
    const { id } = useParams();
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes);
    let recipe: RecipeType | undefined;
    if (id) {
        recipe = recipesList.find(r => r.id === parseInt(id));
    }
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mr: 2 }}>
                <Card sx={{ width: 600, borderRadius: 2, overflow: 'auto', p: 1, maxHeight: 400 }}> {/* הוסף maxHeight */}
                    <Box sx={{ backgroundColor: "rgb(215, 155, 154)", p: 1 }}>
                        <Typography variant="h5" color="white">
                            {recipe?.title}
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "rgb(215, 155, 154)", p: 0.5, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Description:
                        </Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '0.9rem' }}>
                        {recipe?.description}
                    </Typography>
                    <Box sx={{ backgroundColor: "rgb(215, 155, 154)", p: 0.5, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Ingredients:
                        </Typography>
                    </Box>
                    <List>
                        {recipe?.ingredients?.map((ingredient, index) => (
                            <ListItem key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography fontSize='0.9rem'>🍜 {ingredient}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ backgroundColor: "rgb(215, 155, 154)", p: 0.5, borderRadius: 1, mt: 2 }}>
                        <Typography variant="h6" color="white">
                            Instructions:
                        </Typography>
                    </Box>
                    <Typography sx={{ mt: 1, fontSize: '0.9rem' }}>
                        {recipe?.instructions}
                    </Typography>
                </Card>
            </Box>
        </>
    )
}
export default ShowRecipe;
