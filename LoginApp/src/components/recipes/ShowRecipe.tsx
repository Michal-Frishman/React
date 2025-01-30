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
        //הדפסת error
    }
    return (
        <>
            <h1>{recipe?.title}</h1>
            <ul>
                <h2>Ingredientes</h2>
                {recipe?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe?.instructions}</p>
        </>
    );
}
export default ShowRecipe;
