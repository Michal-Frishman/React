// import { useDispatch, useSelector } from "react-redux"
// import { fetchRecipes, RecipeType } from "./RecipesSlice"
// import { AppDispatch, RootStore } from "./RecipesStore";
// import { useContext, useEffect, useState } from "react";
// import AddRecipe from "./AddRecipe";
// import { Link, Outlet } from "react-router";
// import { userContext } from "../../App";

// export default () => {
//     const [user, dispatchUser] = useContext(userContext);
//     const [addRecipes, setAddRecipes] = useState(false);
//     const dispatch = useDispatch<AppDispatch>();
//     const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
//     useEffect(() => {
//         dispatch(fetchRecipes());
//     }, [dispatch]);
//     return (<>

//         {recipesList.map((r: RecipeType) => (
//             <div key={r.id}>
//                 <Link to={`/recipes/${r.id}`}>{r.title}</Link>
//             </div>
//         ))}
//         <Outlet />
//         {user.id && <button onClick={() => setAddRecipes(true)}>Add recipe</button>}
//         {addRecipes && <AddRecipe setAddRecipes={setAddRecipes}/>}
//     </>)
// }

import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes, RecipeType } from "./RecipesSlice"
import { AppDispatch, RootStore } from "./RecipesStore";
import { useContext, useEffect, useState } from "react";
import AddRecipe from "./AddRecipe";
import { Link, Outlet } from "react-router";
import { userContext } from "../../App";
import { Drawer } from "@mui/material";

export default () => {
    const [user, dispatchUser] = useContext(userContext);
    const [addRecipes, setAddRecipes] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);
    return (<>
              {recipesList.map((r: RecipeType) => (
            <div key={r.id}>
                <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </div>
        ))}
        <Outlet />
        {user.id && <button onClick={() => setAddRecipes(true)}>Add recipe</button>}
        {addRecipes && <AddRecipe setAddRecipes={setAddRecipes} />}

    </>)
}





