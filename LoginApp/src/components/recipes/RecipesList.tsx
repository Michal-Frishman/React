import { useDispatch, useSelector } from "react-redux"
import { fetchAddRecipe, fetchRecipes, RecipeType } from "./RecipesStore"
import { AppDispatch, RootState } from "../../Store";
import { useContext, useEffect, useState } from "react";
import { idUser } from "../user/HomePage";
import AddRecipe from "./AddRecipe";

export default () => {

    const [addRecipes, setAddRecipes] = useState(false);
    const userId = useContext(idUser);
    const dispatch = useDispatch<AppDispatch>();
    const recipesList = useSelector((state: RootState) => state.recipes.recipes)
    const addRecipefunc = fetchAddRecipe;
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);
    return (<>
        {recipesList.map((r: RecipeType) =>
            <div key={r.id}>{r.title}</div>
        )}
        <button onClick={() => setAddRecipes(true)}>Add recipe</button>
        {/* {userId && addRecipes && <AddRecipe func={addRecipefunc} />} */}
        {addRecipes&&<AddRecipe func={addRecipefunc} />}
    </>)
}