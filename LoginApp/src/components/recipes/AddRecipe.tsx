import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./RecipesStore"
import { fetchAddRecipe, fetchRecipes, RecipeType } from "./RecipesSlice"
import { Box, Button, Modal, TextField } from "@mui/material"
import { style } from "../user/Login"
import { useContext, useState } from "react"
import { buttonStyle, UserContext } from "../../App"
import { useNavigate } from "react-router"
import Error from '../Error'
const schema = object({
    title: string().required(),
    description: string().required(),
    ingredients: string().required(),
    instructions: string().required(),
}).required()
const AddRecipe = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(true);
    const [user, dispatch] = useContext(UserContext);
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
    return (
        user.id && (
            <Modal open={openModal}>
            <Box sx={style}>
                <h3>Add your recipe</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="Title" {...register("title")} />
                    <br />
                    {errors.title && <Error message={errors.title.message as string} />}
                    <br />
                    <TextField label="Description" {...register("description")} />
                    <br />
                    {errors.description && <Error message={errors.description.message as string} />}
                    <br />
                    <TextField label="Ingredients(seperate by , )" {...register("ingredients")} />
                    <br />
                    {errors.ingredients && <Error message={errors.ingredients.message as string} />}
                    <br />
                    <TextField label="Instructions" {...register("instructions")} />
                    <br />
                    {errors.instructions && <Error message={errors.instructions.message as string} />}
                    <br />
                    <Button type="submit" sx={buttonStyle} >Add</Button>
                </form>
            </Box>
        </Modal>
        
        )
    );
    
}
export default AddRecipe