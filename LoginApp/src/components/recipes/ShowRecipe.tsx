import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootStore } from "./RecipesStore";
import { RecipeType } from "./RecipesSlice";

const ShowRecipe = () => {
    const { id } = useParams();
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes);
    let recipe: RecipeType | undefined;
    if (id) {
        recipe = recipesList.find(r => r.id === parseInt(id));
    } else {
        recipe = recipesList.find(r => r.id === 0);
    }
    return (
        <>
            <h1>{recipe?.title}: {recipe?.authorId}</h1>
            <ul>
                {recipe?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li> 
                ))}
            </ul>
            <p>{recipe?.instructions}</p>
        </>
    );
}

export default ShowRecipe;
