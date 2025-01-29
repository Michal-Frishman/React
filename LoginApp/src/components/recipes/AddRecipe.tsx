import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { useDispatch } from "react-redux"
import { AppDispatch } from "./RecipesStore"
import { fetchAddRecipe } from "./RecipesSlice"
import { Box, Modal, TextField } from "@mui/material"
import { style } from "../user/Login"
import { useState } from "react"
const schema = object({
    title: string().required(),
    description: string().required(),
    ingredients: string().required(),
    instructions: string().required(),
    products: string().required()
}).required()
const AddRecipe = ({ setAddRecipes }: { setAddRecipes: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const dispatchFetch = useDispatch<AppDispatch>();
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset
    } = useForm({ resolver: yupResolver(schema) })
    console.log(errors);
    //any!!!
    const onSubmit = (data: any) => {
        console.log("try to submit", data);
        const ingredientsArray = data.ingredients.toString().split(',');
        const recipe = {
            title: data.title,
            description: data.description,
            ingredients: ingredientsArray,
            instructions: data.instructions,
            products: data.products
        };
        console.log(recipe);
        setOpenModal(false);
        setAddRecipes(false);
        console.log("Dispatch function:", dispatchFetch);
        dispatchFetch(fetchAddRecipe(recipe));
        console.log("after");
        reset();
    }
    const [openModal, setOpenModal] = useState(true);
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

                    <TextField label="products" {...register("products")} />
                    <br />
                    {errors.products && <div color="red">{errors.products.message}</div>}
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