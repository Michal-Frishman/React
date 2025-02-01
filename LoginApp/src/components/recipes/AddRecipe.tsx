import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./RecipesStore"
import { fetchAddRecipe, fetchRecipes, RecipeType } from "./RecipesSlice"
import { Box, Modal, TextField } from "@mui/material"
import { style } from "../user/Login"
import { useContext, useState } from "react"
import { userContext } from "../../App"
import { useNavigate } from "react-router"
const schema = object({
    title: string().required(),
    description: string().required(),
    ingredients: string().required(),
    instructions: string().required(),
}).required()
const AddRecipe = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(true);
    const [user, dispatch] = useContext(userContext);
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset
    } = useForm({ resolver: yupResolver(schema) })
    const dispatchFetch = useDispatch<AppDispatch>();
    //any!!!
    const onSubmit = async (data: any) => {
        const ingredientsArray = data.ingredients.split(',');
        const recipe: RecipeType = {
            title: data.title,
            description: data.description,
            ingredients: ingredientsArray,
            instructions: data.instructions
        };
        setOpenModal(false);
        dispatchFetch(fetchAddRecipe({ recipe, userId: user.id }));
        dispatchFetch(fetchRecipes());
        reset();
        navigate('/recipes');
    }
    return (<>
        <Modal open={openModal}>
            <Box sx={style}>
                <h3>Add your recipe</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="title" {...register("title")} />
                    <br />
                    {errors.title && <div color="red">{errors.title.message}</div>}
                    <br />
                    <TextField label="description" {...register("description")} />
                    <br />
                    {errors.description && <div color="red">{errors.description.message}</div>}
                    <br />
                    <TextField label="ingredients" {...register("ingredients")} />
                    <br />
                    {errors.ingredients && <div color="red">{errors.ingredients.message}</div>}
                    <br />
                    <TextField label="instructions" {...register("instructions")} />
                    <br />
                    {errors.instructions && <div color="red">{errors.instructions.message}</div>}
                    <br />
                    <button type="submit" >Add</button>
                </form>
            </Box>
        </Modal>


    </>)
}
export default AddRecipe