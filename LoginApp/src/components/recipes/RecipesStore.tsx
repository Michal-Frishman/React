import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../Store';

export type RecipeType = {
    id: number,
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}
// export type FullRecipeType ={
//     id: number,
//     title: string;
//     description: string;
//     ingredients: string[];
//     instructions: string;
// }
export const fetchRecipes = createAsyncThunk('recipes/fetch', async (_, thunkApi) => {
    try {
        const res = await axios.get("http://localhost:3000/api/recipes");
        return res.data as RecipeType[];
    } catch (erorr) {
        return thunkApi.rejectWithValue(erorr);
    }
})
export const fetchAddRecipe = createAsyncThunk('recipes/add', async (recipe: RecipeType,thunkApi) => {
    try {
        // const res = await axios.post("http://localhost:3000/api/recipes", recipe,{ headers: { 'user-id': userID + '' } }
            const res = await axios.post("http://localhost:3000/api/recipes", recipe);
        return res.data as RecipeType;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as RecipeType[],
        loading: false,
        error: null as string | null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<RecipeType[]>) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load recipes";
            })
            .addCase(fetchAddRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAddRecipe.fulfilled, (state, action: PayloadAction<RecipeType>) => {
                state.loading = false;
                state.recipes.push(action.payload);
            })
            .addCase(fetchAddRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add recipe";
            });
    }
});
export const selectRecipes = (state: RootState) => state.recipes;
export const { actions } = recipesSlice; 
export default recipesSlice;